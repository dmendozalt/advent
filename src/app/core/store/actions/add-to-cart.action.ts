import { createAction, props } from '@ngrx/store';
import { BookingDetail } from '../models/booking.model';


export const AddToCart = createAction(
    '[Cart] Set Booking Detail',
    props<BookingDetail>()
);
