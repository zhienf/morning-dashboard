import { Article } from "./article";

export class Feed {
    _id: string;
    url: string;
    name: string;
    articles: Article[]; 

    constructor() {
        this._id = '';
        this.url = '';
        this.name = '';
        this.articles = [];
    }
}