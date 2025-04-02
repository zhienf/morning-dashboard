/**
 * @file This file defines the Article model for the RSS feed application.
 * 
 * @author Zhi'En Foo
 */

const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    title: String,
    link: String,
    description: String,
    pubDate: Date,
});

module.exports = mongoose.model("Article", ArticleSchema);