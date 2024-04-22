import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsTableComponent } from './foods-table.component';

describe('FoodsTableComponent', () => {
  let component: FoodsTableComponent;
  let fixture: ComponentFixture<FoodsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodsTableComponent]
    });
    fixture = TestBed.createComponent(FoodsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
