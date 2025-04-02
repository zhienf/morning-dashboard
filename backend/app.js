/**
 * @file This file sets up an Express server for the application.
 * 
 * @author Zhi'En Foo
 */

// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const http = require('http');
const cors = require('cors');
const axios = require("axios");
const bodyParser = require('body-parser');
const Parser = require("rss-parser");
const Feed = require("./models/feed");
const Article = require("./models/article");

const app = express(); 
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const server = http.createServer(app);

// Configure Mongoose
const url = "mongodb://127.0.0.1:27017/morning-dashboard";

async function connectDB(url) {
   await mongoose.connect(url);
   return ("Connected to Mongoose successfully.");
}

connectDB(url)
    .then(console.log)
    .catch((err) => console.log(err));


// Start the server
const PORT_NUMBER = 8080;
server.listen(PORT_NUMBER, () => console.log(`Server is running on port ${PORT_NUMBER}`));

// Endpoint: add a new RSS feed
app.post("/api/feeds", async (req, res) => {
    const { url, size } = req.body;
    console.log(url);

    if (!url) {
        return res.status(400).json({ error: 'URL is required.' });
    }

    try {
        const parser = new Parser();
        const feedData = await parser.parseURL(url);

        const name = feedData.title;
        const articles = await Promise.all(
            feedData.items.map(async (item) => {
                const article = new Article({
                    title: item.title,
                    link: item.link,
                    description: item.contentSnippet,
                    pubDate: new Date(item.pubDate),
                });
                return article.save(); 
            })
        );

        const feed = new Feed({
            url,
            name,
            articles: articles.map((article) => article._id),
            size: size || 5,
        });

        await feed.save();
        res.status(200).json(feed);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint: fetch and update articles for all feeds
app.get("/api/feeds", async (req, res) => {
    try {
        const feeds = await Feed.find().populate("articles");
        const updatedFeeds = feeds.map((feed) => {
            const limitedArticles = feed.articles.slice(0, feed.size);
            feed.articles = limitedArticles;
            return feed;
        });
        res.status(200).json(updatedFeeds);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpoint: delete a feed
app.delete("/api/feeds", async (req, res) => {
    try {
        const id = req.query.id;
        let feed = await Feed.findOne({ _id: id });
        if (!feed) {
            return res.status(404).json({ error: 'Feed not found.' });
        } else {
            let articles = feed.articles;
            articles.forEach(async article => {
                await Article.findOneAndDelete({ _id: article._id });
            });
            let result = await Feed.deleteOne({ _id: id});
            res.status(200).json({ message: 'Feed deleted successfully.' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}); 