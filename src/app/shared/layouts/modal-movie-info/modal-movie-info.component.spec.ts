import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMovieInfoComponent } from './modal-movie-info.component';

describe('ModalMovieInfoComponent', () => {
  let component: ModalMovieInfoComponent;
  let fixture: ComponentFixture<ModalMovieInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMovieInfoComponent]
    });
    fixture = TestBed.createComponent(ModalMovieInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
