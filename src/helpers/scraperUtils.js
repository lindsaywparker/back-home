const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const styles = [
  'contemporary',
  'modern',
  'asian',
  'craftsman',
  'farmhouse',
  'industrial',
  'mediterranean',
  'midcentury',
  'rustic',
  'scandinavian',
  'shabby-chic-style',
  'victorian',
];
const categories = [
  'exterior',
  'living-room',
  'kitchen',
  'dining-room',
  'pendant-lighting',
  'armchairs-and-accent-chairs',
];
// const parsedResults = JSON.parse(fs.readFileSync('src/helpers/results.json'), 'utf8');
const parsedResults = {};

styles.forEach((style) => {
  request(`https://www.houzz.com/photos/${style}`, (error, response, html) => {
    if (error) { console.log(`Error: ${error}`); }

    console.log(`Status code: ${response.statusCode}`);

    const $ = cheerio.load(html);

    $('div.imageArea').each(function (index) {
      const src = $(this).find('img.hide-context').attr('src');
      const sid = $(this).find('img.hide-context').attr('sid');
      const startIndex = src.indexOf(`${style}-`) !== -1 ? src.indexOf(`${style}-`) + style.length + 1 : -1;
      const endIndex = src.indexOf('.jpg');
      const category = src.slice(startIndex, endIndex);

      if (src.indexOf(style) !== -1) {
        parsedResults[sid] = {
          sid,
          src,
          style,
          category,
        };
      }
    });
  });

  categories.forEach((category) => {
    request(`https://www.houzz.com/photos/${style}/${category}`, (error, response, html) => {
      if (error) { console.log(`Error: ${error}`); }

      console.log(`Status code: ${response.statusCode}`);

      const $ = cheerio.load(html);

      $('.imageArea').each(function (index) {
        const src = $(this).find('img.hide-context').attr('src');
        const sid = $(this).find('img.hide-context').attr('sid');

        if (src.indexOf('data') === -1) {
          parsedResults[sid] = {
            sid,
            src,
            style,
            category,
          };
        }
      });
      fs.writeFile('src/helpers/results.json', JSON.stringify(parsedResults, null, 4));
    });
  });
});

