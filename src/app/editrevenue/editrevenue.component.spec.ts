import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrevenueComponent } from './editrevenue.component';

describe('EditrevenueComponent', () => {
  let component: EditrevenueComponent;
  let fixture: ComponentFixture<EditrevenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditrevenueComponent]
    });
    fixture = TestBed.createComponent(EditrevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
