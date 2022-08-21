import { Injectable } from '@angular/core';
import { HttpService } from '@app-core/http/http.service';

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
}
