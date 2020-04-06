import { Component, Input } from '@angular/core';

@Component({
  selector: 'ticket-coupon',
  templateUrl: './ticket-coupon.component.html',
  styleUrls: ['./ticket-coupon.component.scss']
})
export class TicketCouponComponent {

  @Input() public movie: [];
  @Input() public bill: [];

  constructor() { }

}
