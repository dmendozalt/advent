import { createReducer, on } from '@ngrx/store';
import { Container } from 'src/app/interfaces/container';
import { CancelReview, ReviewContainer } from '../actions/container.action';

const initialState: Container = {
    containerId: "",
    book: true,
    description: "",
    dimensions: "",
    fee: 0,
    issuedBy: "",
    origin: "",
    status: "",
    destination: ""
}

export const ReviewContainerReducer = createReducer(
    initialState,
    on(ReviewContainer, (state, container) => {
        state = container;
        return state;
    }),
    on(CancelReview, (state) => {
        state = initialState;
        return state;
    })
);