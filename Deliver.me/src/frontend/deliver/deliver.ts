import { User } from "../authentication/authentication"

export interface Pix{
    key:String
}
export interface Card{
    enterprise:string
    number:string
}

export interface Deliver{
    id:Number,
    user:User,
    rating:Number,
    telpix:Pix,
    randompix:Pix,
    emailpix:Pix,
    credit:Card,
    debit:Card,
    description:String
}

