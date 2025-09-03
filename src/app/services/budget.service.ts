import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  // Remplacez cette URL par celle de votre API Spring Boot
  private apiUrl = 'http://localhost:8080/api/budgets/data';

  constructor(private http: HttpClient) { }

  getDashboardData(year: number): Observable<any> {
    const url = `${this.apiUrl}?year=${year}`;
    return this.http.get<any>(url);
  }
}
