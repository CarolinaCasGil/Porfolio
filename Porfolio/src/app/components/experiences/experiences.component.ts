import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  experience = [
    {
      title: 'Analista superior de datos',
      place: 'ALTEN ',
      date: '2024',
      description:'-Implementé soluciones de análisis de datos con Google Cloud, Looker Studio y herramientas de BI (Power BI, Python, SQL) que mejoraron la eficiencia operativa en un 10% y redujeron costos en un 15%. Contribuí a mejorar la toma de decisiones con análisis basados en datos precisos que llevo afluencia en ciertos locales comerciales un 25%.',
      utilities: ['Google Cloud', 'Power BI', 'Looker (software)', 'SQL', 'Python']
    },
    {
      title: 'Técnico de reparación de equipos informáticos',
      place: 'Inet Smart ITC',
      date: '2022',
      description:'-Implementé soluciones de análisis de datos con Google Cloud, Looker Studio y herramientas de BI (Power BI, Python, SQL) que mejoraron la eficiencia operativa en un 10% y redujeron costos en un 15%. Contribuí a mejorar la toma de decisiones con análisis basados en datos precisos que llevo afluencia en ciertos locales comerciales un 25%.',
      utilities: ['Reparación de equipos informáticos', 'Sistemas informáticos', 'Servicios técnicos', 'Gestión de sistemas', 'Infraestructura de tecnologías de la información']
    }
  ]

}
