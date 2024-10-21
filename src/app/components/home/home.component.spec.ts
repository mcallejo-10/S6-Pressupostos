import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { PanelComponent } from '../panel/panel.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      imports: [HomeComponent, FormsModule, PanelComponent],
      providers: [BudgetService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('total shoud be 0', () => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#preuTotal')?.textContent).toContain('Preu pressupostat: 0€');

  })

  it('total shoud be 300 when Seo is checked', async() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const checkboxSeo = fixture.nativeElement.querySelector('#checkboxSeo') as HTMLInputElement;
    checkboxSeo.click();

    await fixture.whenStable(); 
    fixture.detectChanges();
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#preuTotal')?.textContent).toContain('Preu pressupostat: 300€');
  })

  it('total shoud be 400 when Ads is checked', async() => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;

    const checkboxAds = fixture.nativeElement.querySelector('#checkboxAds') as HTMLInputElement;
    checkboxAds.click();

    await fixture.whenStable();   
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#preuTotal')?.textContent).toContain('Preu pressupostat: 400€');
  })

  it('total shoud be 530 when Web is checked', async() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    

    const checkboxWeb = fixture.nativeElement.querySelector('#checkboxWeb') as HTMLInputElement;
    checkboxWeb.click();

    await fixture.whenStable();    
    
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#preuTotal')?.textContent).toContain('Preu pressupostat: 530€');
  })

});

