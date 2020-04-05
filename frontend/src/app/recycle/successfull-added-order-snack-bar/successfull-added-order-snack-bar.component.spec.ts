import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullAddedOrderSnackBarComponent } from './successfull-added-order-snack-bar.component';

describe('SuccessfullAddedOrderSnackBarComponent', () => {
  let component: SuccessfullAddedOrderSnackBarComponent;
  let fixture: ComponentFixture<SuccessfullAddedOrderSnackBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfullAddedOrderSnackBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfullAddedOrderSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
