import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feed } from '../../models/feed';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list-feeds',
  standalone: true,
  imports: [],
  templateUrl: './list-feeds.component.html',
  styleUrl: './list-feeds.component.css'
})
export class ListFeedsComponent {

  feeds: Feed[] = [];

  constructor(private db: ApiService, private router: Router) {}

  ngOnInit() {
    this.getFeeds();
  }

  getFeeds() {
    this.db.getFeeds().subscribe((data: any) => {
      this.feeds = data;
    });
  }
}
