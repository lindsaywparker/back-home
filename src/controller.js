const request = require('request');

const BASE_URL = 'http://swapi.co/api/people/';

function getPlaces(req, res, next) {
  request(BASE_URL, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send(body);
    }
  });
}

module.exports = {
  getPlaces,
};
