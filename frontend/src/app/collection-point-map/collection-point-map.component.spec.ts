import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPointMapComponent } from './collection-point-map.component';

describe('CollectionPointMapComponent', () => {
  let component: CollectionPointMapComponent;
  let fixture: ComponentFixture<CollectionPointMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionPointMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPointMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
