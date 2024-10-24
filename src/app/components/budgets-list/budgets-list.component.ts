import { Component, effect, inject } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Client } from '../../interfaces/clients';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budgets-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss'
})
export class BudgetsListComponent {
  budgetService = inject(BudgetService);
  clientList: Client[] = []
  sortedDate: boolean = false;
  sortedName: boolean = false;
  sortedImport: boolean = false;
  sortDirection: string = '';
  sortField: string = '';
  searchedByName: boolean = false;
  clientIdx: number = -1;

  foundClientList: Client[] = [];

  foundClient: Client = {
    clientName: '',
    phone: '',
    email: '',
    seo: false,
    ads: false,
    web: false,
    total: 0
  }


  constructor() {
    effect(() => {
      this.clientList = this.budgetService.clientsList();
    });
  }


  sortByField(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    switch (field) {
      case 'byName':
        this.sortByName();
        break;
      case 'byDate':
        this.sortByDate();
        break;
      case 'byImport':
        this.sortByImport();
        break;
    }
  }

  sortByDate() {
    if (this.sortedDate === false) {
      this.clientList.sort((a, b) => a.created!.localeCompare(b.created!));
      this.sortedDate = true;
    } else if (this.sortedDate === true) {
      this.clientList.sort((a, b) => b.created!.localeCompare(a.created!));
      this.sortedDate = false;
    }
    this.searchedByName = false;
  }

  sortByName() {
    if (this.sortedName === false) {
      this.clientList.sort((a, b) => a.clientName.localeCompare(b.clientName));
      this.sortedName = true;
    } else if (this.sortedName === true) {
      this.clientList.sort((a, b) => b.clientName.localeCompare(a.clientName));
      this.sortedName = false;
    }
    this.searchedByName = false;
  }

  sortByImport() {
    if (this.sortedImport === false) {
      this.clientList.sort((a, b) => a.total - b.total);
      this.sortedImport = true;
    } else {
      this.clientList.sort((a, b) => b.total - a.total);
      this.sortedImport = false;
    }
    this.searchedByName = false;
  }

  isSortedBy(field: string): boolean {
    return this.sortField === field;
  }

  searchByName(inputName: string) {
    this.foundClientList = [];
    this.clientList.forEach(client => {

      if (client.clientName.toLowerCase().includes(inputName.toLowerCase())) {
        this.foundClientList.push(client)
      }
      this.searchedByName = true;

    })
  }
} 
