import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditparamComponent } from './editparam.component';

describe('EditparamComponent', () => {
  let component: EditparamComponent;
  let fixture: ComponentFixture<EditparamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditparamComponent]
    });
    fixture = TestBed.createComponent(EditparamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
