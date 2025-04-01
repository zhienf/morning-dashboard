import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }), 
}

const API_URL = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFeeds() {
    return this.http.get(API_URL + '/feeds', httpOptions);
  }

  addFeed(url: string) {
    const body = { url };
    return this.http.post(API_URL + '/feeds', body, httpOptions);
  }
}
