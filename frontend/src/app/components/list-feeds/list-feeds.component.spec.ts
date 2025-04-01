import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeedsComponent } from './list-feeds.component';

describe('ListFeedsComponent', () => {
  let component: ListFeedsComponent;
  let fixture: ComponentFixture<ListFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFeedsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
