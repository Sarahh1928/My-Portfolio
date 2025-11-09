import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

  experiences = [
    {
      role: 'Freelance Full Stack Developer',
      company: 'Medtik (medtik.net)',
      location: 'Remote',
      duration: 'Aug 2025 – Oct 2025',
      achievements: [
        'Developed a healthcare management platform using Angular, Node.js, Express.js, and PostgreSQL.',
        'Built and integrated RESTful APIs for seamless communication between front-end and back-end services.',
        'Focused on delivering scalable, secure, and user-friendly interfaces to enhance system efficiency.'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Enosh Science Center',
      location: 'Cairo, Egypt',
      duration: 'Aug 2024 – Apr 2025',
      achievements: [
        'Developed internal web applications to streamline operations and enhance user experience.',
        'Improved functionality, usability, and performance in web development projects.'
      ]
    },
    {
      role: 'Software Development Intern',
      company: 'National Bank of Egypt (NBE)',
      location: 'Cairo, Egypt',
      duration: 'Aug 2023 – Sep 2023',
      achievements: [
        'Participated in banking software security analysis and architectural discussions.',
        'Contributed to improving authentication systems and identifying cybersecurity vulnerabilities.'
      ]
    }
  ];
}
