import { Component, OnInit } from '@angular/core';  // Asegúrate de importar OnInit correctamente
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  navLinks = [
    { path: 'dashboard', label: 'Dashboard', class: 'active' },
    { path: 'studies', label: 'Estudios', class: 'inactive' },
  ];

  ngOnInit() {
    const titleElement = document.getElementById('title');
    if (titleElement) {
      titleElement.addEventListener('click', () => {
        this.navigateToHome();
      });
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navLinkSelected(index: number) {
    this.navLinks.forEach((nav, i) => {
      nav.class = i === index ? 'active' : 'inactive';
    });
  }

}
