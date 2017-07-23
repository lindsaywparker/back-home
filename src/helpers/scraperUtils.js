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
const parsedResults = [];

[...styles, ...categories].forEach((style) => {
  request(`https://www.houzz.com/photos/${style}`, (error, response, html) => {
    if (error) { console.log(`Error: ${error}`); }

    console.log(`Status code: ${response.statusCode}`);

    const $ = cheerio.load(html);

    $('div.imageArea').each(function (index) {
      const src = $(this).find('img.hide-context').attr('src');
      const startIndex = src.indexOf(`${style}-`) !== -1 ? src.indexOf(`${style}-`) + style.length + 1 : -1;
      const endIndex = src.indexOf('.jpg');
      const category = src.slice(startIndex, endIndex);
      const json = {
        src,
        style,
        category,
      };

      if (src.indexOf(style) !== -1) {
        console.log(src);
        parsedResults.push(json);
      }
    });
    fs.writeFile('src/helpers/results.json', JSON.stringify(parsedResults, null, 4));
  });
});

// function scrape(iterator) {
//   iterator.forEach((element) => {
//     request(`https://www.houzz.com/photos/${element}`, (error, response, html) => {
//       if (error) { console.log(`Error: ${error}`); }
//
//       console.log(`Status code: ${response.statusCode}`);
//
//       const $ = cheerio.load(html);
//
//       $('div.imageArea').each(function (index) {
//         const src = $(this).find('img.hide-context').attr('src');
//         // const startIndex = src.indexOf(`${style}-`) !== -1 ? src.indexOf(`${style}-`) + style.length + 1 : -1;
//         // const endIndex = src.indexOf('.jpg');
//         // const category = src.slice(startIndex, endIndex);
//         const json = {
//           src,
//           // style,
//           // category,
//         };
//
//         if (src.indexOf(element) !== -1) {
//           resultsArray.push(json);
//         }
//
//         return resultsArray;
//       });
//     });
//   });
// }
// const parsedStyles = scrape(styles);
// console.log('hi', parsedStyles);
// const parsedCategories = scrape(categories);
//
//
// fs.writeFile('src/helpers/results2.json', JSON.stringify([...parsedStyles, ...parsedCategories], null, 4));
