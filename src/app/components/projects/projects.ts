import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular.',
      link: '#'
    },
    {
      title: 'Task Manager App',
      description: 'A Flutter app to manage daily tasks efficiently.',
      link: '#'
    },
    {
      title: 'Weather App',
      description: 'A simple weather app using Angular and API integration.',
      link: '#'
    }
  ];
}
