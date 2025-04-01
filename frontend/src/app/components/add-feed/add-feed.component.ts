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

  constructor(private db: ApiService, private router: Router) {}

  addFeed() {
    this.db.addFeed(this.rssFeedUrl).subscribe({
      next: (value: any) => {
        console.log(value);
        this.router.navigate(['list-feeds']);
      },
      error: (err: any) => {
        console.error(err);
        this.router.navigate(['invalid-data']);
      }
    });
  }
}
