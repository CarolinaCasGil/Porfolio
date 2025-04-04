import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DassboardComponent } from "./components/dassboard/dassboard.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { StudiesComponent } from "./components/studies/studies.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DassboardComponent, HeaderComponent, StudiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Porfolio';
}
