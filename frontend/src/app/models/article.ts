export class Article {
    _id: string;
    title: string;
    link: string;
    description: string;
    pubDate: Date; 

    constructor() {
        this._id = '';
        this.title = '';
        this.link = '';
        this.description = '';
        this.pubDate = new Date();
    }
}