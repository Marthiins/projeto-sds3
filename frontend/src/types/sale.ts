import { Seller } from "./seller"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller;
}

export type SalePage = { //busca paginada
    content?: Sale[]; //? é para indicar como opcional
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    first: boolean; //quando buscar o true é boolean
    numberOfElements?: number;
    empty?: boolean;
}

export type SaleSun = {
    sellerName: string;
    sum: number;
}

export type SaleSucess = {
    sellerName: string;
    visited: number;
    deals: number;
}