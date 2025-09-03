import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ministere {
  codeMini: number;
  libCourtMini: string;
  libLongMini: string;
  dateDebutMini: string;
  dateFinMini: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class MinistereService {

  private apiUrl = 'http://localhost:8080/api/ministeres';

  constructor(private http: HttpClient) { }

  // GET : récupérer tous les ministères
  getMinisteres(): Observable<Ministere[]> {
    return this.http.get<Ministere[]>(this.apiUrl);
  }

  // POST : ajouter un ministère
  addMinistere(ministere: Ministere): Observable<Ministere> {
    return this.http.post<Ministere>(this.apiUrl, ministere);
  }

  // PUT : modifier un ministère
  updateMinistere(ministere: Ministere): Observable<Ministere> {
    return this.http.put<Ministere>(`${this.apiUrl}/${ministere.codeMini}`, ministere);
  }

  // DELETE : supprimer un ministère
  deleteMinistere(codeMini: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${codeMini}`);
  }
}
