import { AfterViewInit, Component } from '@angular/core';
import { NavBar } from '../nav-bar/nav-bar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Projects } from '../projects/projects';
import { Experience } from '../experience/experience';
import { Skills } from '../skills/skills';
import { Education } from '../education/education';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';
import Typed from 'typed.js';


@Component({
  selector: 'app-home',
  imports: [NavBar,Projects,Experience,Skills,Education,Contact,Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home implements AfterViewInit {
  
  ngAfterViewInit(): void {
    const options = {
      strings: ['Software Engineer.', 'UI/UX Enthusiast.', 'Creative Problem Solver.'],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
      backDelay: 1000,
      showCursor: true,
      cursorChar: '|'
    };

    new Typed('.typed-role', options);
  }

downloadCV() {
  const link = document.createElement('a');
  link.href = 'Resume_Sarah_Mohamed.pdf';
  link.download = 'Sarah_Mohamed_CV.pdf';
  link.click();
}

}
