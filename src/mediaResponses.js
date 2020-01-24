const path = require('path');
const fileLoader = require('./fileLoader.js');

const resolvedPath = (relativePath) => path.resolve(__dirname, relativePath);

const getParty = (request, response) => {
  fileLoader.loadFile(request, response, resolvedPath('../client/party.mp4'), 'video/mp4');
};

const getBling = (request, response) => {
  fileLoader.loadFile(request, response, resolvedPath('../client/bling.mp3'), 'audio/mpeg');
};

const getBird = (request, response) => {
  fileLoader.loadFile(request, response, resolvedPath('../client/bird.mp4'), 'video/mp4');
};

module.exports.getParty = getParty;
module.exports.getBling = getBling;
module.exports.getBird = getBird;
