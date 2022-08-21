import { Component, OnInit } from '@angular/core';
import { BookingsService } from '@app-services/bookings/bookings.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  
  paymentMethods!: any[]
  listCard: card[] = [
    {
      issues_by:"AICT",
      qty:2,
      fee:12500,
      total:25000
    },
    {
      issues_by:"AICT",
      qty:4,
      fee:12500,
      total:50000
    },
    {
      issues_by:"AICT",
      qty:2,
      fee:12500,
      total:25000
    }
  ];
  displayedColumns: string[] = ['issues_by', 'qty', 'fee', 'total', "action"];

  constructor(private bookingService: BookingsService) { }

  ngOnInit(): void {
    this.bookingService.getPaymentMethods().subscribe((res) => {
      console.log(res);
    })
    this.listCard.push();
  }

  get totalPayment(): number{
    const result = this.listCard.reduce((accumulator, obj) => {
      return accumulator + obj.total;
    }, 0);
    return result;
  }

}

export interface card {
  issues_by:string;
  qty:number;
  fee:number;
  total:number;
}