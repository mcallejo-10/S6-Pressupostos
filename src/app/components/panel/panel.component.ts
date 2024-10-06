import { Component, inject, effect } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
  budgetService = inject(BudgetService);
  totalPlusWeb:number = 0;
  numPages:number = 1;
  numLanguages:number = 1;
  budgetWebForm: FormGroup;
  constructor() {
    this.budgetWebForm = new FormGroup({
      numPages: new FormControl(1), 
      numLanguages: new FormControl(1),
    });
  }

  increment(field: string) {
    const currentValue = this.budgetWebForm.get(field)?.value;
    this.budgetWebForm.get(field)?.setValue(currentValue + 1);
    this.numPages = this.budgetWebForm.get('numPages')?.value
    this.numLanguages = this.budgetWebForm.get('numLanguages')?.value
    this.budgetService.calculateTotalBudget(this.numPages, this.numLanguages);

  }

  decrement(field: string) {
    const currentValue = this.budgetWebForm.get(field)?.value;
    if (currentValue > 0) {
      this.budgetWebForm.get(field)?.setValue(currentValue - 1);
    }
    this.numPages = this.budgetWebForm.get('numPages')?.value
    this.numLanguages = this.budgetWebForm.get('numLanguages')?.value
    this.budgetService.calculateTotalBudget(this.numPages, this.numLanguages);

  }
  
  


// aquí cogeremos el número de paginas, y 
//lo mandamos al service com la función


  

}
