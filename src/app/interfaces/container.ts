export interface Container {
    containerId: string,
    origin: string,
    destination?: string,
    status:string,
    description: string,
    dimensions: string,
    book:boolean
    issuedBy: string,
    fee:number
}