import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
date: string = '';


  // Add these new properties for the year selection
  years: number[] = [];
  selectedYear: number = 2025;
  metrics = {
    ae: '100M',
    ord: '99M',
    op: '10M',
    tauxEng: '10%',
    tauxOrd: '10%'
  };

  tableHeaders: string[] = [
    'Code',
    'Intitulé court',
    'Intitulé long',
    'Engagé AE',
    'Engagé CP',
    'Ordonnance',
    'OP',
    'Taux Engagé',
    'Taux Ordonnance'
  ];

  tableData: any[] = [
    {
      code: 'vjdk',
      shortTitle: 'dcjk',
      longTitle: 'dcjhd',
      engagedAe: 'dcu',
      engagedCp: 'djhd',
      ordonnance: 'cujh',
      op: 'sdcydj',
      tauxEngaged: 'schdgj',
      tauxOrdonnance: 'cvhdgj'
    },
    {
      code: 'dcy',
      shortTitle: 'cv',
      longTitle: 'edcj',
      engagedAe: 'c ycvdd',
      engagedCp: 'dghdv',
      ordonnance: 'c hjhd',
      op: 'd, ,ndjckdch',
      tauxEngaged: 'xhghfc',
      tauxOrdonnance: 'dcjhdgjd'
    }
  ];

  constructor() { }

ngOnInit(): void {
    this.date = new Date().toLocaleDateString('fr-FR');
    this.generateYears();
    this.selectedYear = new Date().getFullYear();
  }

  // Method to generate a list of years
  private generateYears(): void {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
      this.years.push(year);
    }
  }

}
