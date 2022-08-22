import { ActionReducerMap } from '@ngrx/store';
import { BookingState } from './models/booking.model';
import { AddToCartReducer } from './reducers/add-to-cart.reducer';
import { ReviewContainerReducer } from './reducers/container.reducer';
import { SetBookingDateReducer } from './reducers/set-booking-date.reducers';

export const reducers: ActionReducerMap<BookingState> = {
    date: SetBookingDateReducer,
    details: AddToCartReducer,
    container: ReviewContainerReducer
};
