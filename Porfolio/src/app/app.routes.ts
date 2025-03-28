import { Routes } from '@angular/router';
import { DassboardComponent } from './components/dassboard/dassboard.component';

export const routes: Routes = [

    {path: 'dashboard', component:DassboardComponent},
    {path: '**', redirectTo: 'dashboard'}

];
