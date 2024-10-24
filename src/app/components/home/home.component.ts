import { Component, inject, effect } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule, Validators, AbstractControl } from '@angular/forms';
import { PanelComponent } from "../panel/panel.component";
import { BudgetService } from '../../services/budget.service';
import { BudgetsListComponent } from "../budgets-list/budgets-list.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Client } from '../../interfaces/clients';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, PanelComponent, BudgetsListComponent],
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
  oneCheckMin: boolean = true;
  numPages: number = 1;
  numLanguages: number =1;

  client!: Client;


  clientForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{9}$')
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });
  



  get name() {
    return this.clientForm.get('name');
  }
  get phone() {
    return this.clientForm.get('phone');
  }
  get email() {
    return this.clientForm.get('email');
  }
  
  constructor(private router: Router) {
    effect(() => {
      this.totalPlusWeb = this.budgetService.totalPlusWeb();
      this.total = this.budgetService.total();
      this.numLanguages = this.budgetService.numLanguages();
      this.numPages = this.budgetService.numPages()
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

  onCheckboxChange() {    
    this.router.navigate([], {
      queryParams: {
        seo: this.isCheckedSeo,
        ads: this.isCheckedAds,
        web: this.isCheckedWeb
      },
      queryParamsHandling: 'merge' 
    });
    this.oneCheckMin = true;
    this.calculateTotal()
  }

  ngOnInit() {
    this.router.routerState.root.queryParams.subscribe(params => {
      this.isCheckedSeo = params['seo'] === 'true';
      this.isCheckedAds = params['ads'] === 'true';
      this.isCheckedWeb = params['web'] === 'true';
      this.numLanguages = +params['lang'] || 1;
      this.numPages = +params['pag'] || 1;
      
    });
  }

  onSubmit() {
    if (this.total > 0) {
      this.oneCheckMin = true;
      this.client = {
        clientName: this.clientForm.value.name!,
        phone: this.clientForm.value.phone!,
        email: this.clientForm.value.email!,
        seo: this.isCheckedSeo,
        ads: this.isCheckedAds,
        web: this.isCheckedWeb,
        total: this.total,
      }
      
      this.budgetService.addClient(this.client)
    } else {
      this.oneCheckMin = false;
    }
  }
}
