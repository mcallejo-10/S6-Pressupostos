import { Injectable, signal } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
// numPages: number = 1;
// numLanguages: number = 1;
totalPlusWeb = signal<number>(0);


calculateTotalBudget(numPages:number, numLanguages:number) {
  this.totalPlusWeb.set(numPages * numLanguages * 30);
}
  constructor() { }
}
