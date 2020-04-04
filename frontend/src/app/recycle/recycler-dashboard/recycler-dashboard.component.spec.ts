import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclerDashboardComponent } from './recycler-dashboard.component';

describe('RecyclerDashboardComponent', () => {
  let component: RecyclerDashboardComponent;
  let fixture: ComponentFixture<RecyclerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecyclerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
