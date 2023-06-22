import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddraruleComponent } from './addrarule.component';

describe('AddraruleComponent', () => {
  let component: AddraruleComponent;
  let fixture: ComponentFixture<AddraruleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddraruleComponent]
    });
    fixture = TestBed.createComponent(AddraruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
