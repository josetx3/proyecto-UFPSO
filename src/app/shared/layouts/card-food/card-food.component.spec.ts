import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFoodComponent } from './card-food.component';

describe('CardFoodComponent', () => {
  let component: CardFoodComponent;
  let fixture: ComponentFixture<CardFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardFoodComponent]
    });
    fixture = TestBed.createComponent(CardFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
