import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreportComponent } from './editreport.component';

describe('EditreportComponent', () => {
  let component: EditreportComponent;
  let fixture: ComponentFixture<EditreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditreportComponent]
    });
    fixture = TestBed.createComponent(EditreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
