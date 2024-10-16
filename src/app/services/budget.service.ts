import { Injectable, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Client } from '../interfaces/clients';
@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  numPages = signal<number>(1);
  numLanguages = signal<number>(1);
  totalPlusWeb = signal<number>(0);
  total = signal<number>(0);
  clientsList = signal<Client[]>([]);

  addClient(client: Client) {
    if (client.web === true) {
      client = {
        ...client,
        pages: this.numPages(),
        lenguages: this.numLanguages(),
      }
    }
    client = {
      ...client,
      created_at: this.getCurrentDate()
    }
    this.clientsList.set([...this.clientsList(), client]);
    console.warn(this.clientsList())
  }

  calculateWebBudget(newNumPages: number, newNumLanguages: number) {
    this.numLanguages.set(newNumLanguages);
    this.numPages.set(newNumPages);
    this.totalPlusWeb.set(newNumPages * newNumLanguages * 30);
  }

  constructor() { }
  getCurrentDate(): string {
    const today = new Date();
    
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Los meses empiezan en 0, por lo que sumamos 1
    const day = today.getDate().toString().padStart(2, '0'); // Asegurar que siempre tenga 2 dígitos
  
    return `${year}-${month}-${day}`;
  }
  
  
  
}

