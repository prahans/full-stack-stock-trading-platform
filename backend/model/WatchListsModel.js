const {model} = require("mongoose");
const {WatchListsSchema} = require("../schemas/WatchListsSchema");

const WatchListsModel = new model ("watchlist", WatchListsSchema);

module.exports = {WatchListsModel}