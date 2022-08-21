import { createAction, props } from '@ngrx/store';
import { BookingInfo } from '../models/booking.model';


export const SetBookingInfo = createAction(
    '[Cart] Set Booking Info',
    props<BookingInfo>()
);
