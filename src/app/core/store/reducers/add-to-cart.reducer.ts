import { createReducer, on } from '@ngrx/store';
import { AddToCart } from '../actions/add-to-cart.action';
import { BookingDetail } from '../models/booking.model';

const initialState: BookingDetail = {
    details: [{
        containerId: 0,
        fee: 0
    }]
};

export const AddToCartReducer = createReducer(
    initialState,
    on(AddToCart, (state, bookingdetail) => ({ ...state, bookingdetail }))
);