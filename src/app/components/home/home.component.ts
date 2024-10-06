import { Component, inject, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from "../panel/panel.component";
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, PanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  budgetService = inject(BudgetService);
  totalPlusWeb: number = 0;

  total: number = 0;
  isCheckedSeo: boolean = false;
  isCheckedAds: boolean = false;
  isCheckedWeb: boolean = false;

  constructor() {
    effect(() => {
      this.totalPlusWeb = this.budgetService.totalPlusWeb();
      this.calculateTotal();
    });
  }
  
  calculateTotal() {
    this.total = 0;
    if (this.isCheckedAds === true) {
      this.total = this.total + 400;      
    }
    if (this.isCheckedSeo === true) {
      this.total = this.total + 300;      
    }
    if (this.isCheckedWeb === true) {
      this.total = this.total + 500;      
      this.total = this.total + this.budgetService.totalPlusWeb();
    }
  }

  
}
