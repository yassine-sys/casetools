import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddparamComponent } from './addparam.component';

describe('AddparamComponent', () => {
  let component: AddparamComponent;
  let fixture: ComponentFixture<AddparamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddparamComponent]
    });
    fixture = TestBed.createComponent(AddparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
