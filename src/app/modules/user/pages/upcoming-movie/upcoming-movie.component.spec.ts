import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMovieComponent } from './upcoming-movie.component';

describe('UpcomingMovieComponent', () => {
  let component: UpcomingMovieComponent;
  let fixture: ComponentFixture<UpcomingMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpcomingMovieComponent]
    });
    fixture = TestBed.createComponent(UpcomingMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
