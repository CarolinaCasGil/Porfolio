import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';  
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = [
    { path: 'dashboard', label: 'Sobre mi' },
    { path: 'studies', label: 'Estudios' },
    { path: 'experiences', label: 'Experiencia' },
  ];

  selectedLink: string = 'dashboard'; // Enlace seleccionado por defecto

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    // Verifica si está en el navegador antes de acceder a document
    if (isPlatformBrowser(this.platformId)) {
      const titleElement = document.getElementById('title');
      if (titleElement) {
        titleElement.addEventListener('click', () => {
          this.navigateToHome();
        });
      }
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navLinkSelected(link: string) {
    this.selectedLink = link; // Actualiza el enlace seleccionado
    this.router.navigate([link]); // Navega al enlace seleccionado
  }
}