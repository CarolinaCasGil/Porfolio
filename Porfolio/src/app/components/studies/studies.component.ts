import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-studies',
  imports: [CommonModule],
  templateUrl: './studies.component.html',
  styleUrl: './studies.component.scss'
})
export class StudiesComponent {

  studies = [
    {
      title: 'GRADO SUPERIOR DISEÑO DE APLICACIONES MULTIPLATAFORMA',
      school: 'Centro Europeo de Estudios Profesionales',
      date: '2022-2024',
      description: 'Durante el Grado Superior en Diseño de Aplicaciones Multiplataforma, he aprendido a desarrollar aplicaciones para diferentes plataformas, como móviles, tabletas y la web. He adquirido conocimientos en programación utilizando lenguajes como Java, HTML y CSS, y también he trabajado con bases de datos y servicios web. Además, he desarrollado habilidades en el diseño de interfaces, análisis de requisitos y gestión de proyectos.',
      utilities: ['Java', 'HTML', 'CSS', 'SQL', 'Python']
    },
    {
      title: 'GRADO MEDIO SISTEMAS MICROINFORMÁTICOS Y REDES',
      school: 'Liceo Sorolla B',
      description: 'Durante el Grado Medio en Sistemas Microinformáticos y Redes, aprendí a gestionar y mantener sistemas informáticos, tanto hardware como software. Adquirí conocimientos en instalación y configuración de redes, así como en la resolución de problemas técnicos. También me formé en la administración de sistemas operativos y la gestión de servicios de red. ',
      date: '2020-2022',
      utilities: ['PHP', 'HTML', 'CSS']
    }
  ]

  cursos = [
    {
      title: 'GOOGLE: INTELIGENCIA ARTIFICIAL Y PRODUCTIVIDAD',
      school: 'Santander',
      date: 'Feb - 2025',
      utilities: ['Google Gemini']
    },
    {
      title: 'SPRING BOOT',
      school: 'Udemy',
      date: 'Feb - 2025',
      utilities: ['Spring Boot']
    },
    {
      title: 'CERTIFICACIONES DE ORALCE JAVA PROGRAMER',
      school: 'Oracle',
      date: 'Ene - 2025',
      utilities: ['Java 8']
    }
  ]


}
