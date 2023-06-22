import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditraruleComponent } from './editrarule.component';

describe('EditraruleComponent', () => {
  let component: EditraruleComponent;
  let fixture: ComponentFixture<EditraruleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditraruleComponent]
    });
    fixture = TestBed.createComponent(EditraruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
