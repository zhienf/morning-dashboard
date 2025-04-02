import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Feed } from '../../models/feed';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-delete-feed',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-feed.component.html',
  styleUrl: './delete-feed.component.css'
})
export class DeleteFeedComponent {

  @Input() id: string = '';
  @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

  constructor(private db: ApiService, private router: Router) {}

  deleteFeed() {
    this.db.deleteFeed(this.id).subscribe({
      next: (value: any) => {
        console.log(value);
        this.onDelete.emit();
        // this.router.navigate(['feeds']);
      },
      error: (err: any) => {
        console.error(err);
        this.router.navigate(['invalid-data']);
      }
    });
  }
}
