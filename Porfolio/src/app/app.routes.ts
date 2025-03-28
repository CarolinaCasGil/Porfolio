import { Routes } from '@angular/router';
import { DassboardComponent } from './components/dassboard/dassboard.component';
import { StudiesComponent } from './components/studies/studies.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },  // Asegúrate de tener esta ruta
    { path: 'dashboard', component: DassboardComponent },
    { path: 'studies', component: StudiesComponent },
    { path: '**', redirectTo: '/dashboard' }
  ];
