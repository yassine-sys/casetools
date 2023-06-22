import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuestreamComponent } from './revenuestream.component';

describe('RevenuestreamComponent', () => {
  let component: RevenuestreamComponent;
  let fixture: ComponentFixture<RevenuestreamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevenuestreamComponent]
    });
    fixture = TestBed.createComponent(RevenuestreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
