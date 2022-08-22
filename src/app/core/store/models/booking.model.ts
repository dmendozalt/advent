import { Container } from "src/app/interfaces/container"

export interface BookingState {
    date: string,
    details: BookingDetail[],
    container: Container
}

export interface BookingDetail {
    containerId: string,
    fee: number
}