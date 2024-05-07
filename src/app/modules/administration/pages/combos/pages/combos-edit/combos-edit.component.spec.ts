import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombosEditComponent } from './combos-edit.component';

describe('CombosEditComponent', () => {
  let component: CombosEditComponent;
  let fixture: ComponentFixture<CombosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CombosEditComponent]
    });
    fixture = TestBed.createComponent(CombosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
