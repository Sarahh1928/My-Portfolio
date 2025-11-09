import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll';

@Component({
  selector: 'app-education',
  imports: [RevealOnScrollDirective],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {

  education = {
    university: 'German University in Cairo (GUC)',
    degree: 'Bachelor of Science in Computer Science and Engineering',
    graduation: 'Class of 2025',
    coursework: [
      'Software Engineering',
      'Databases',
      'Computer Networks',
      'Cybersecurity',
      'Algorithms',
      'Data Structures'
    ],
    description: 'Gained a comprehensive foundation in computer engineering with a focus on software systems, web development, and cybersecurity. Applied theoretical knowledge to practical projects, including GUI design for hardware control and full-stack web applications, bridging academic learning with real-world development.'
  };
}
