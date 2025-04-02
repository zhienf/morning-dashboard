/**
 * @file This file defines the Feed model for the RSS feed application.
 * 
 * @author Zhi'En Foo
 */

const mongoose = require('mongoose');

const FeedSchema = mongoose.Schema({
    url: String,
    name: String,
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }],
    size: Number,
});

module.exports = mongoose.model("Feed", FeedSchema);