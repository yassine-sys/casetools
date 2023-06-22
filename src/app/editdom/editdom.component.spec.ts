import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdomComponent } from './editdom.component';

describe('EditdomComponent', () => {
  let component: EditdomComponent;
  let fixture: ComponentFixture<EditdomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditdomComponent]
    });
    fixture = TestBed.createComponent(EditdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
