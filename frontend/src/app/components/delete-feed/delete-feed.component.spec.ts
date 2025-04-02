import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFeedComponent } from './delete-feed.component';

describe('DeleteFeedComponent', () => {
  let component: DeleteFeedComponent;
  let fixture: ComponentFixture<DeleteFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteFeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
