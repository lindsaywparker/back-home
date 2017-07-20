const resultsFile = require('./helpers/results.json');

function getImages(req, res, next) {
  res.status(200).send(resultsFile);
}

module.exports = {
  getImages,
};
