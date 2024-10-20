import { Component, inject, effect, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit{
  budgetService = inject(BudgetService);
  totalPlusWeb:number = 0;
  numPages:number = 1;
  numLanguages:number = 1;
  budgetWebForm: FormGroup;
  constructor(private router: Router) {
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
    this.budgetService.calculateWebBudget(this.numPages, this.numLanguages);
    this.onNumChange()

  }

  decrement(field: string) {
    const currentValue = this.budgetWebForm.get(field)?.value;
    if (currentValue > 1) {
      this.budgetWebForm.get(field)?.setValue(currentValue - 1);
    }
    this.numPages = this.budgetWebForm.get('numPages')?.value
    this.numLanguages = this.budgetWebForm.get('numLanguages')?.value
    this.budgetService.calculateWebBudget(this.numPages, this.numLanguages);
    this.onNumChange()
  }
  onNumChange() {    
    this.router.navigate([], {
      queryParams: {
        lang: this.numLanguages,
        pag: this.numPages
      },
      queryParamsHandling: 'merge' 
    });    
  }

  ngOnInit() {
    this.router.routerState.root.queryParams.subscribe(params => {
      this.numLanguages = +params['lang'] || 1;
      this.numPages = +params['pag'] || 1;
      this.budgetWebForm.patchValue({
        numLanguages: this.numLanguages,
        numPages: this.numPages
      });
      
    });
    this.budgetService.calculateWebBudget(this.numPages, this.numLanguages);

  }
}
