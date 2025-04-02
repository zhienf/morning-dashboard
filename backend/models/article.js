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
    feedId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feed'
    }
});

module.exports = mongoose.model("Article", ArticleSchema);