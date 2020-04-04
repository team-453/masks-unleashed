import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPointDashboardComponent } from './collection-point-dashboard.component';

describe('CollectionPointDashboardComponent', () => {
  let component: CollectionPointDashboardComponent;
  let fixture: ComponentFixture<CollectionPointDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionPointDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPointDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
