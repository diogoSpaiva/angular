import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressFormComponent, TicketCouponComponent } from './';

@NgModule({
  declarations: [
    AddressFormComponent,
    TicketCouponComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AddressFormComponent,
    TicketCouponComponent
  ]
})
export class ComponentsModule { }
