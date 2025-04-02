import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Feed } from '../../models/feed';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-add-feed',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-feed.component.html',
  styleUrl: './add-feed.component.css'
})
export class AddFeedComponent {

  rssFeedUrl: string = '';
  rssFeedSize: number = 5;

  constructor(private db: ApiService, private router: Router) {}

  addFeed() {
    this.db.addFeed({ url: this.rssFeedUrl, size: this.rssFeedSize }).subscribe({
      next: (value: any) => {
        console.log(value);
        this.router.navigate(['feeds']);
      },
      error: (err: any) => {
        console.error(err);
        this.router.navigate(['invalid-data']);
      }
    });
  }
}
