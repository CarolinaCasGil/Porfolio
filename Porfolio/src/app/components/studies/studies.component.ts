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
      title: 'Cursus 42 Telefonica',
      school: 'Telefonica',
      date: 'Mar 2025 - Actualmente',
      description: '42 es una academia de programación innovadora y gratuita que utiliza un enfoque basado en el aprendizaje entre pares y proyectos prácticos. No cuenta con profesores ni clases tradicionales, fomentando la autonomía, la resolución de problemas y el trabajo en equipo. Su metodología permite a los estudiantes aprender a programar a través de desafíos progresivos en un entorno colaborativo.',
      utilities: ['C', 'Linux ', 'Git ', 'SQL', 'P2P ', 'Trabajo en equipo ', 'Aprendizaje autodidacta']
    },
    {
      title: 'Piscina 42 Telefonica',
      school: 'Telefonica',
      date: 'Feb - Mar 2025',
      description: 'Bootcamp de programación intensivo basado en el aprendizaje entre pares y la resolución de problemas. Durante la Piscina de 42, me sumergí en un entorno altamente exigente donde la programación y la lógica fueron la clave para superar desafíos diarios. Sin profesores ni clases tradicionales, el aprendizaje se basó en la colaboración, la resolución de problemas y la capacidad de adaptarme a nuevos conceptos de manera autónoma.',
      utilities: ['C', 'Linux ', 'Git ', 'SQL', 'P2P ', 'Trabajo en equipo ', 'Aprendizaje autodidacta']
    },
    {
      title: 'IFCD15 PROGRAMACIÓN JAVA SE 8 (ORACLE)',
      school: 'Core Networks SL',
      date: 'Nov 2024 - Ene 2025',
      description: 'En este curso aprendí los fundamentos de la programación en Java SE 8, incluyendo el manejo de estructuras de control, programación orientada a objetos y gestión de excepciones. También profundicé en el uso de colecciones, expresiones lambda y el manejo eficiente de archivos. Fue una formación clave para mejorar mis habilidades en desarrollo de aplicaciones con Java.',
      utilities: ['Java 8']
    },
    {
      title: 'GRADO SUPERIOR DISEÑO DE APLICACIONES MULTIPLATAFORMA',
      school: 'Metrodora',
      date: '2022 - 2024',
      description: 'Durante el Grado Superior en Diseño de Aplicaciones Multiplataforma, he aprendido a desarrollar aplicaciones para diferentes plataformas, como móviles, tabletas y la web. He adquirido conocimientos en programación utilizando lenguajes como Java, HTML y CSS, y también he trabajado con bases de datos y servicios web. Además, he desarrollado habilidades en el diseño de interfaces, análisis de requisitos y gestión de proyectos.',
      utilities: ['Java', 'HTML', 'CSS', 'SQL', 'Python']
    },
    {
      title: 'GRADO MEDIO SISTEMAS MICROINFORMÁTICOS Y REDES',
      school: 'Liceo Sorolla B',
      description: 'Durante el Grado Medio en Sistemas Microinformáticos y Redes, aprendí a gestionar y mantener sistemas informáticos, tanto hardware como software. Adquirí conocimientos en instalación y configuración de redes, así como en la resolución de problemas técnicos. También me formé en la administración de sistemas operativos y la gestión de servicios de red. ',
      date: '2020 - 2022',
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
