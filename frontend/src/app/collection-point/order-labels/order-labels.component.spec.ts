import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLabelsComponent } from './order-labels.component';

describe('OrderLabelsComponent', () => {
  let component: OrderLabelsComponent;
  let fixture: ComponentFixture<OrderLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
