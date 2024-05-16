import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieScheduleEditComponent } from './movie-schedule-edit.component';

describe('MovieScheduleEditComponent', () => {
  let component: MovieScheduleEditComponent;
  let fixture: ComponentFixture<MovieScheduleEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieScheduleEditComponent]
    });
    fixture = TestBed.createComponent(MovieScheduleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
