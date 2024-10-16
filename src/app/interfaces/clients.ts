// import { BootstrapOptions } from "@angular/core";

export interface Client {
    clientName: string;
    phone: string;
    email: string;
    seo: boolean;
    ads: boolean;
    web: boolean;
    total: number;
    pages?: number; 
    lenguages?: number;
    created_at?: string;
}
