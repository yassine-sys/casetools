import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrevenueComponent } from './addrevenue.component';

describe('AddrevenueComponent', () => {
  let component: AddrevenueComponent;
  let fixture: ComponentFixture<AddrevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddrevenueComponent]
    });
    fixture = TestBed.createComponent(AddrevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
