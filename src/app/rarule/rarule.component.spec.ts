import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaruleComponent } from './rarule.component';

describe('RaruleComponent', () => {
  let component: RaruleComponent;
  let fixture: ComponentFixture<RaruleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RaruleComponent]
    });
    fixture = TestBed.createComponent(RaruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
