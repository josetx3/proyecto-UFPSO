import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAuthTableComponent } from './user-auth-table.component';

describe('UserAuthTableComponent', () => {
  let component: UserAuthTableComponent;
  let fixture: ComponentFixture<UserAuthTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAuthTableComponent]
    });
    fixture = TestBed.createComponent(UserAuthTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
