import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
  subtotal:number = 0;


  //subtotal = this.budgetService.calculateTotalBudget();
  

}
