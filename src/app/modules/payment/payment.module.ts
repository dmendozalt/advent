import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PaymentRoutingModule,
    AngularMaterialModule
  ]
})
export class PaymentModule { }
