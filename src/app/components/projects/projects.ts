import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectDetail } from '../project-detail/project-detail';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectDetail, RevealOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  selectedProject: any = null;
  projects = [
    {
      title: 'Hybrid Photonics Integration GUI',
      smallDescription:
        'Developed a user-friendly GUI to control Hybrid Photonics Integration systems with real-time hardware monitoring and automation.',
      description:
        'Designed and developed a comprehensive GUI software to control and monitor multiple subsystems of the Hybrid Photonics Integration setup, including machine vision, beam profiling, laser control, temperature control, and positioning. The system enables seamless hardware communication, real-time visualization, and subsystem-level automation with an intuitive interface. JVM heap optimization was implemented to resolve memory overflow issues caused by continuous video data streams.',
      techStack: ['Java', 'Python', 'Hardware Integration'],
      links: [],
      duration: 'Jan 2024 - May 2024',
      role: 'Full-stack Developer',
      features: [
        'Centralized GUI control for five hardware subsystems',
        'Real-time live stream and screenshot capture via Basler camera',
        'Beam profiling with area-of-interest selection and single-shot capture',
        'Laser and temperature controller interfaces for precise parameter tuning',
        'Motion control for 3-axis positioning system',
        'Subsystem modularity for independent start/stop operations',
        'Enhanced process monitoring and documentation workflow'
      ],
      images: [
        'GUI.png',
        'Flow Chart.png'
      ],
      status: 'Completed'
    },
    {
      title: 'Medtik Clinic Platform',
      smallDescription:
        'Built a web platform to manage clinic operations, appointments, and patient records efficiently.',
      description:
        'Clinic management web app with appointment scheduling, patient records, and in-app chat between doctors and patients. Designed for doctors and staff to handle appointments, patient data, and prescriptions seamlessly. Built the frontend with Angular for a responsive and intuitive UI, and connected it to a Node.js and Express backend. Used PostgreSQL in a Docker environment for consistent data handling and JWT for secure authentication.',
      techStack: ['Angular', 'Node.js', 'Express.js', 'PostgreSQL'],
      links: [
        // { text: 'Details', url: '#' },
        { text: 'Live Site', url: 'https://medtik.net' }
      ],
      duration: 'Jun 2023 - Dec 2023',
      role: 'Frontend Developer',
      features: [
        'Appointment scheduling and management',
        'Patient records and prescriptions tracking',
        'In-app chat between doctors and patients',
        'Responsive and intuitive UI with Angular',
        'Secure authentication using JWT',
        'Backend data management with Node.js, Express, and PostgreSQL in Docker'
      ],
      images: [
        'medtik-landing.png',
        'medtik-login.png',
      ],
      status: 'Live'
    },
    {
      title: 'Scalable E-commerce System',
      smallDescription:
        'Designed a high-performance backend architecture for an e-commerce platform with focus on scalability and maintainability.',
      description:
        'Developed a high-performance backend for an e-commerce platform focusing on scalability, maintainability, and optimized database operations. Implemented a microservices-based architecture using Java Spring Boot, containerized with Docker, orchestrated via Kubernetes, and connected to PostgreSQL and MongoDB databases. The system handles high concurrency and ensures reliability for production-level traffic.',
      techStack: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB'],
      links: [{ text: 'GitHub', url: 'https://github.com/Sarahh1928/scalify/tree/main' }],
      duration: 'Feb 2023 - Aug 2023',
      role: 'Backend Developer',
      features: [
        'Microservices-based architecture',
        'Dockerized services with Kubernetes orchestration',
        'Optimized PostgreSQL & MongoDB queries',
        'High concurrency support'
      ],
      status: 'Completed'
    },
    {
      title: 'El7a2ny Pharmacy',
      smallDescription:
        'Pharmacy management platform connecting patients, pharmacists, and admins with real-time chat and medicine ordering.',
      description:
        'Developed a comprehensive pharmacy management system that streamlines interactions between patients, pharmacists, and admins. The platform allows medicine browsing, ordering, wallet payments, and in-app chat for consultations. Admins can manage users and view sales, pharmacists can manage medicines and track reports, and patients can browse, order, and communicate with pharmacists. Built with a MERN stack (MongoDB, Express.js, React.js, Node.js) with real-time features using Socket.io, JWT authentication, and integrated payment options.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      links: [{ text: 'GitHub', url: 'https://github.com/sarahh1928/healthcare-system' }],
      duration: 'Mar 2023 - Jul 2023',
      role: 'Full-stack Developer',
      features: [
        'Integrated with clinic system to access patient prescriptions',
        'Manage medicines and orders, track sales, and handle payments',
        'Real-time chat between patients and pharmacists',
        'View past orders and notifications for out-of-stock medicines',
        'Real-time chat between patients and pharmacists for consultations',
        'Secure JWT authentication and role-based access control'
      ],
      images: [
        'el7a2ny-pharmacist.png',
        'el7a2ny-addmedicine.png',
        'el7a2ny-medicines.png',
        'el7a2ny-cart.png',
        'el7a2ny-orders.png'

      ],
      status: 'Completed'
    },
    {
      title: 'Sports Match Database',
      smallDescription:
        'A database system to manage clubs, matches, fans, tickets, and stadiums efficiently for enhanced data accessibility and reporting.',
      description:
        'Developed a comprehensive database system to track clubs, matches, fans, tickets, and stadiums. The system implements stored procedures, functions, and views to handle all operations including adding/updating/deleting clubs, matches, fans, and stadiums. Key features include attendance tracking, ticket sales management, match scheduling, and reporting analytics. The project enforces strict database constraints and follows best practices for stored procedure and view implementation.',
      techStack: ['SQL', 'C#'],
      links: [{ text: 'GitHub', url: '#' }],
      duration: 'Jan 2022 - Apr 2022',
      role: 'Database Developer',
      features: [
        'Implemented tables, views, functions, and stored procedures for clubs, matches, fans, tickets, and stadiums',
        'Tracked match results, fan attendance, and ticket sales',
        'Handled match scheduling, host requests, and stadium availability',
        'Enabled reporting with matches per team, highest attendance, and unplayed matches',
        'Automated data integrity with constraints and standardized stored procedure inputs/outputs'
      ],
      status: 'Completed'
    },
    // {
    //   title: 'Game Development Collection',
    //   description:
    //     'Created multiple Unity-based games, including an endless runner and a Diablo-inspired adventure, focusing on gameplay and UI design.',
    //   techStack: ['Unity', 'C#'],
    //   links: [{ text: 'Watch Demo', url: '#' }],
    //   duration: 'Jul 2022 - Dec 2022',
    //   role: 'Game Developer',
    //   features: [
    //     'Endless runner mechanics',
    //     'Diablo-inspired adventure gameplay',
    //     'UI & HUD design for player experience',
    //     'Interactive treasure & enemy systems'
    //   ],
    //   images: [
    //     'assets/projects/game-1.png',
    //     'assets/projects/game-2.png'
    //   ],
    //   status: 'Completed'
    // }
  ]


  openProject(project: any) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }
}
