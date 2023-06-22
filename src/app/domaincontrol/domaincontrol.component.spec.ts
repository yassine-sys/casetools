import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaincontrolComponent } from './domaincontrol.component';

describe('DomaincontrolComponent', () => {
  let component: DomaincontrolComponent;
  let fixture: ComponentFixture<DomaincontrolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomaincontrolComponent]
    });
    fixture = TestBed.createComponent(DomaincontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
