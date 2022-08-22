import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingState } from '@app-core/store/models/booking.model';
import { BookingsService } from '@app-services/bookings/bookings.service';
import { Store } from '@ngrx/store';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  paymentMethods!: any[]

  paymentMethod!: any
  date!: string

  cart!: any[]
  displayedColumns: string[] = ['containerId', 'fee', 'action'];

  constructor(private router: Router, private bookingService: BookingsService, private store: Store<BookingState>) { }

  ngOnInit(): void {
    this.store.select('date').subscribe(res => this.date = res)
    this.store.select('details').subscribe((res: any[]) => {
      this.cart = res.filter((detail) => detail.containerId !== "")
      this.cart = this.cart.map(({ type, ...rest }) => {
        return rest;
      })
    })
    this.bookingService.getPaymentMethods().subscribe((res: any) => {
      this.paymentMethods = res.content
    })
  }

  delete(containerId: string) {
    this.cart = this.cart.filter(detail => detail.containerId !== containerId)
  }

  cancel() {
    this.router.navigate(['containers']);
  }

  get totalPayment(): number {
    const result = this.cart.reduce((accumulator, obj) => {
      return accumulator + obj.fee;
    }, 0);
    return result;
  }

  pay() {
    if (this.paymentMethod === undefined || this.cart.length == 0) {
      Swal.fire("Warn", "Please select at least one container and card", "warning")
      return
    }

    this.bookingService.payBooking(this.date, this.paymentMethod, this.cart).subscribe((response: any) => {
      if (!response.hasError) {
        Swal.fire("Success", `Payment proccessed successfully with token ${response.content.paymentToken}`, 'success')
        this.router.navigate(['containers'])
      }
    },
      () => {
        Swal.fire("Error", "Your payment can't be proccessed", 'error')
      })
  }

}