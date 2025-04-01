export class Feed {
    _id: string;
    url: string;
    name: string;
    articles: String[]; 

    constructor() {
        this._id = '';
        this.url = '';
        this.name = '';
        this.articles = [];
    }
}