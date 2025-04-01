/**
 * @file This file defines the Feed model for the RSS feed application.
 * 
 * @author Zhi'En Foo
 */

const mongoose = require('mongoose');

const FeedSchema = mongoose.Schema({
    url: String,
    name: String,
    articles: Array,
});

module.exports = mongoose.model("Feed", FeedSchema);