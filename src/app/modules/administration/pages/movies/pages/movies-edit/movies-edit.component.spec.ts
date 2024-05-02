import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesEditComponent } from './movies-edit.component';

describe('MoviesEditComponent', () => {
  let component: MoviesEditComponent;
  let fixture: ComponentFixture<MoviesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesEditComponent]
    });
    fixture = TestBed.createComponent(MoviesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
