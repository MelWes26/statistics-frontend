import { Routes } from '@angular/router';
import { Acceuil } from './acceuil/acceuil';
import { Dashboard } from './dashboard/dashboard';
import { SuiviBudgtaire } from './suivi-budgtaire/suivi-budgtaire';



export const routes: Routes = [
  { path: '', component: Acceuil, pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'suivi-budgtaire', component: SuiviBudgtaire },

  { path: '**', redirectTo: '' }
];
