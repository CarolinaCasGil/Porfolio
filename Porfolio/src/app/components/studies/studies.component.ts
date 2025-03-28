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
      title: 'Estudio 1',
      school: 'Esculea 1',
      date: 'Ayer- Hoy',
      utilities: ['HTML', 'CSS', 'Java']
    },
    {
      title: 'Estudio 2',
      school: 'Esculea 2',
      date: 'Ayer- Hoy',
      utilities: ['HTML', 'CSS', 'Java']
    }
]

}
