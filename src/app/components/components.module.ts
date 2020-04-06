import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressFormComponent, TicketCouponComponent } from './';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask-2';

@NgModule({
  declarations: [
    AddressFormComponent,
    TicketCouponComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()


  ],
  exports:[
    AddressFormComponent,
    TicketCouponComponent
  ]
})
export class ComponentsModule { }
