import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {


  skills= [

    { name: 'Angular', icon: 'favicon.ico' },
    { name: 'React.js', icon: 'react.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'HTML5', icon: 'html.svg' },
    { name: 'CSS3', icon: 'css.svg' },
    { name: 'Java', icon: 'java.svg' },
    { name: 'Spring Boot', icon: 'springboot.svg' },
    { name: 'Node.js', icon: 'nodejs.svg' },
    { name: 'Express.js', icon: 'expressjs.svg' },
    { name: 'Python', icon: 'python.svg' },
    { name: 'C', icon: 'c.svg' },
    { name: 'PostgreSQL', icon: 'postgresql.svg' },
    { name: 'MongoDB', icon: 'mongodb.svg' },
    { name: 'SQL', icon: 'sql.svg' }
    ,
    { name: 'Git', icon: 'git.svg' },
    { name: 'Docker', icon: 'docker.svg' },
    { name: 'Postman', icon: 'postman.svg' },
    // { name: 'Agile (Scrum)', icon: 'agile.svg' },
    { name: 'Unity', icon: 'unity.svg' },
    { name: 'Figma', icon: 'figma.svg' }


  ]
}
