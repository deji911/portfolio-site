import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SafeUrlPipe } from '../../shared/safe-url.pipe';

interface Project {
  title: string;
  description: string;
  link: string;
  demo?: string;
  showDemo?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular.',
      link: '#',
      showDemo: false
    },
    {
      title: 'Hotel Booking App',
      description: 'A Flutter app for booking hotels seamlessly with real-time availability.',
      link: 'https://drive.google.com/file/d/1jw33Ldu37I1EE5YV7JTiv2OKTGAMoDhG/view?usp=sharing',
      demo: 'https://drive.google.com/file/d/1Idfu1f_Ar0MfLqcR4q8uTI-CMPUQUEj3/preview',
      showDemo: false
    },
    {
      title: 'Weather App',
      description: 'A simple weather app using Angular and API integration.',
      link: '#',
      showDemo: false
    }
  ];
}
