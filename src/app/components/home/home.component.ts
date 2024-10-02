import { Component, inject } from '@angular/core';
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
  total: number = 0;
  isCheckedSeo: boolean = false;
  isCheckedAds: boolean = false;
  isCheckedWeb: boolean = false;
  
  
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
    }
  }
  
}
