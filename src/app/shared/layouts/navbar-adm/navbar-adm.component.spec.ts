import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdmComponent } from './navbar-adm.component';

describe('NavbarAdmComponent', () => {
  let component: NavbarAdmComponent;
  let fixture: ComponentFixture<NavbarAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarAdmComponent]
    });
    fixture = TestBed.createComponent(NavbarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
