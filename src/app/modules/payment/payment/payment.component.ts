import { Component, OnInit } from '@angular/core';
import { BookingsService } from '@app-services/bookings/bookings.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentMethods!: any[]
  constructor(private bookingService: BookingsService) { }

  ngOnInit(): void {
    this.bookingService.getPaymentMethods().subscribe((res) => {
      console.log(res);
    })
  }

}
