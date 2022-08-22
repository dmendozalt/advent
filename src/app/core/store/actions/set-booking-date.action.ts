import { createAction, props } from '@ngrx/store';


export const SetBookingDate = createAction(
    '[Cart] Set Booking Date',
    props<{ date: string }>()
);
