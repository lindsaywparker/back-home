const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const styles = ['contemporary', 'modern', 'asian', 'craftsman', 'farmhouse', 'industrial', 'mediterranean', 'midcentury', 'rustic', 'scandinavian', 'shabby-chic-style', 'victorian'];
const parsedResults = [];

styles.forEach((style) => {
  request(`https://www.houzz.com/photos/${style}`, (error, response, html) => {
    if (error) { console.log(`Error: ${error}`); }

    console.log(`Status code: ${response.statusCode}`);

    const $ = cheerio.load(html);

    $('div.whiteCard').each(function (index) {
      const image = $(this).find('img.hide-context').attr('src');
      const startIndex = image.indexOf('--');
      const endIndex = image.indexOf('.jpg');
      const tags = image.slice(startIndex, endIndex);
      const json = {
        image,
        tags,
      };

      parsedResults.push(json);
    });
    fs.writeFile('src/helpers/results.json', JSON.stringify(parsedResults, null, 4));
  });
});