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
  sortedDate: boolean = false;
  sortedName: boolean = false;
  sortedImport: boolean = false;


  constructor() {
    effect(() => {
      this.clientList = this.budgetService.clientsList();
    });
  }

  sortByDate() {
    if (this.sortedDate === false){
      this.clientList.sort((a,b) => a.created!.localeCompare(b.created!));
      this.sortedDate = true;
    }else if (this.sortedDate === true) {
      this.clientList.sort((a,b) => b.created!.localeCompare(a.created!));
      this.sortedDate = false;
    } 

  }

    sortByName() {
      if (this.sortedName === false){
        this.clientList.sort((a,b) => a.clientName.localeCompare(b.clientName));
        this.sortedName = true;
      }else if (this.sortedName === true) {
        this.clientList.sort((a,b) => b.clientName.localeCompare(a.clientName));
        this.sortedName = false;
      }
    }

    sortByImport() {
      if (this.sortedImport === false) {
        this.clientList.sort((a, b) =>a.total - b.total);
        this.sortedImport = true;
      } else {
        this.clientList.sort((a, b) =>b.total - a.total);
        this.sortedImport = false;
      }
    }

} 
