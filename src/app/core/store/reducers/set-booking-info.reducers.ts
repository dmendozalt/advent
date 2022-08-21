import { createReducer, on } from '@ngrx/store';
import { SetBookingInfo } from '../actions/set-booking-info.action';
import { BookingInfo } from '../models/booking.model';

const initialState: BookingInfo = {
    userId: 0,
    date: new Date(),
    paymentMethodId: 0
};

export const SetBookingInfoReducer = createReducer(
    initialState,
    on(SetBookingInfo, (state, bookingInfo) => ({ ...state, bookingInfo }))
);