import { BootstrapOptions } from "@angular/core";

export interface Client {
    name: string,
    phone: string,
    email: string, 
    seo: boolean,
    ads: boolean,
    web: boolean,
    pages?: number, 
    lenguages?: number
}
