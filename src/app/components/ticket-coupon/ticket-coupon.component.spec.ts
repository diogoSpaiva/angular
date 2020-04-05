import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCouponComponent } from './ticket-coupon.component';

describe('TicketCouponComponent', () => {
  let component: TicketCouponComponent;
  let fixture: ComponentFixture<TicketCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
