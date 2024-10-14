import { Component, effect, inject } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Client } from '../../interfaces/clients';

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss'
})
export class BudgetsListComponent {
  budgetService = inject(BudgetService);
  clientList: Client[] = [] 

  constructor() {
    effect(() => {
      this.clientList = this.budgetService.clientsList();
     
    });
  }
}
