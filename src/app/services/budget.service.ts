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
    this.clientsList.set([...this.clientsList(), client]);
  }

  calculateWebBudget(newNumPages: number, newNumLanguages: number) {
    this.numLanguages.set(newNumLanguages);
    this.numPages.set(newNumPages);
    this.totalPlusWeb.set(newNumPages * newNumLanguages * 30);
  }

  constructor() { }
}

