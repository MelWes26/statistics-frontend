import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; // Importer OnInit
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule
import { BudgetService } from '../services/budget.service';
import { ShortNumberPipe } from '../pipes/short-number.pipe';
import { FormatNumberPipe } from '../pipes/format-number.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true, // Si vous utilisez les "standalone components"
  imports: [MatIconModule, CommonModule, FormsModule,FormatNumberPipe,
    RouterLink, HttpClientModule,ShortNumberPipe ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  date: string = '';
  years: number[] = [];
  selectedYear: number = new Date().getFullYear(); // Initialiser avec l'année courante

  metrics = {
    totalEngageAE: 0,
    totalOrdonnace: 0,
    totalOP: 0,
    tauxEngage: 0,
    tauxOrdonnance: 0
  };

  tableData: any[] = []; // Initialisé comme un tableau vide

  constructor(private budgetService: BudgetService  ) { }

  ngOnInit(): void {
    this.date = new Date().toLocaleDateString('fr-FR');
    this.generateYears();
    this.fetchDashboardData(); // Appeler la méthode au démarrage
  }

  private generateYears(): void {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 5; year <= currentYear + 5; year++) {
      this.years.push(year);
    }
  }

  // Méthode pour récupérer les données du backend
  fetchDashboardData(): void {
    this.budgetService.getDashboardData(this.selectedYear)
      .subscribe({
        next: (response) => {

          console.log("response",response)
          // Mettre à jour les métriques avec les données de l'API
          this.metrics.totalEngageAE = response.totalEngageAE;
          this.metrics.totalOrdonnace = response.totalOrdonnace;
          this.metrics.totalOP = response.totalOP;
          this.metrics.tauxEngage = response.tauxEngage;
          this.metrics.tauxOrdonnance = response.tauxOrdonnance;

          // Mettre à jour les données du tableau
          this.tableData = response.budgets;
        },
        error: (error) => {
          console.error('Erreur lors de la récupération des données du tableau de bord :', error);
        }
      });
  }

  // Gérer le changement de l'année (à lier dans le template)
  onYearChange(event: Event): void {
    this.selectedYear = parseInt((event.target as HTMLSelectElement).value, 10);
    this.fetchDashboardData();
  }
}
