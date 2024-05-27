import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pague404Component } from './pague-404.component';

describe('Pague404Component', () => {
  let component: Pague404Component;
  let fixture: ComponentFixture<Pague404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pague404Component]
    });
    fixture = TestBed.createComponent(Pague404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
