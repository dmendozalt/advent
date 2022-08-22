import { Injectable } from '@angular/core';
import { HttpService } from '@app-core/http/http.service';
import { BookingDetail } from '@app-core/store/models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  userId!: number;

  constructor(private httpService: HttpService) {
    const user = localStorage.getItem('user')
    if (user)
      this.userId = parseInt(window.atob(user).split('.')[0])
  }

  getPaymentMethods() {
    return this.httpService.get(`Payments/Methods/${this.userId}`)
  }

  payBooking(date: string, paymentMethodId: number, details: BookingDetail[]) {
    const booking = {
      userId: this.userId,
      date,
      details,
      paymentMethodId
    }
    return this.httpService.post('Bookings', booking)
  }
}
