import { Container } from "src/app/interfaces/container"

export interface BookingState {
    info: BookingInfo,
    details: BookingDetail,
    container: Container
}

export interface BookingInfo {
    userId: number,
    date: Date,
    paymentMethodId: number
}

export interface BookingDetail {
    details: ProductDetail[]
}

export interface ProductDetail {
    containerId: number,
    fee: number
}