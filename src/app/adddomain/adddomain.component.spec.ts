import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddomainComponent } from './adddomain.component';

describe('AdddomainComponent', () => {
  let component: AdddomainComponent;
  let fixture: ComponentFixture<AdddomainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdddomainComponent]
    });
    fixture = TestBed.createComponent(AdddomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
