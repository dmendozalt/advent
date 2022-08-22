import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCart } from '@app-core/store/actions/add-to-cart.action';
import { CancelReview } from '@app-core/store/actions/container.action';
import { SetBookingDate } from '@app-core/store/actions/set-booking-date.action';
import { BookingState } from '@app-core/store/models/booking.model';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Container } from 'src/app/interfaces/container';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  container!: Container
  bookingDate!: Date

  constructor(private store: Store<BookingState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select("date").subscribe((res: any) => {
      if (res !== "0000-00-00")
        this.bookingDate = res
    })

    this.store.select("container").subscribe((res: Container) => {
      if (res.containerId == "") {
        this.goBack();
      }
      this.container = res
    })
  }

  pay() {
    if (!this.checkBookingDate()) {
      return
    }

    const bookingDetail = {
      containerId: this.container.containerId,
      fee: this.container.fee
    }
    this.store.dispatch(AddToCart(bookingDetail))
    this.router.navigate(['payment']);
  }

  checkBookingDate(): boolean {
    console.log(this.bookingDate)
    if (this.bookingDate === undefined) {
      Swal.fire("Warning", "Please set booking date", "warning")
      return false;
    } else {
      const date = moment(this.bookingDate).format("yyyy-MM-DD");
      this.store.dispatch(SetBookingDate({ date }))
      return true;
    }
  }

  addToCart() {
    if (!this.checkBookingDate()) {
      return
    }

    const bookingDetail = {
      containerId: this.container.containerId,
      fee: this.container.fee
    }
    this.store.dispatch(AddToCart(bookingDetail))
    this.goBack();
  }

  goBack() {
    this.router.navigate(['containers'])
  }

  cancel() {
    this.store.dispatch(CancelReview())
    this.goBack();
  }

}
