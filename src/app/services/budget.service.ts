import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
numPages: number = 1;
numLanguages: number = 1;
totalWebBudget: number = 0;
calculateTotalBudget() {
  this.totalWebBudget = this.totalWebBudget + (this.numPages * this.numLanguages * 30);
}
  constructor() { }
}
