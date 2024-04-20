import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdministrationComponent } from './main-administration.component';

describe('MainAdministrationComponent', () => {
  let component: MainAdministrationComponent;
  let fixture: ComponentFixture<MainAdministrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainAdministrationComponent]
    });
    fixture = TestBed.createComponent(MainAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
