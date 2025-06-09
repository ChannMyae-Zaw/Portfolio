import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [HeaderComponent, ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

    projects = [
    {
      title: 'Matcha Notetaking App',
      description: "A simple flutter note app that allows users to create, save, edit and delete  notes including special functions, marking favorites, locking notes and daily memos.",
      techStack: ["Flutter", "Dart", "Firestore Database", "Firestore Authentication","Google Play Console", "Android Studio"],
      imageUrl: "",
      link: 'https://github.com/yourusername/resume-parser'
    },
    {
      title: 'AI Powered Code Documentation Website',
      description: 'Angular + OpenWeather API integration',
      imageUrl: "",
      techStack:[],
      link: 'https://your-weather-app.netlify.app'
    },
      {
      title: 'AI Powered Code Documentation Extension for VS Code',
      description: 'Angular + OpenWeather API integration',
      imageUrl: "",
      techStack:[],
      link: 'https://your-weather-app.netlify.app'
    },
      {
      title: 'AI Powered Resume Analyser And Information Extractor',
      description: 'Angular + OpenWeather API integration',
      imageUrl: "",
      techStack:[],
      link: 'https://your-weather-app.netlify.app'
    },
      {
      title: 'Portfolio Website',
      description: 'Angular + OpenWeather API integration',
      imageUrl: "",
      techStack:[],
      link: 'https://your-weather-app.netlify.app'
    },
      {
      title: 'Korean Movie Recommender',
      description: 'Angular + OpenWeather API integration',
      imageUrl: "",
      techStack:[],
      link: 'https://your-weather-app.netlify.app'
    }
  ];

}
