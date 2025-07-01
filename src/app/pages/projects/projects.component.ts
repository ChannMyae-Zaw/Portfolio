import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProjectCardComponent } from "../../components/project-card/project-card.component";
import { CommonModule } from '@angular/common';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  imports: [HeaderComponent, ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

    private firestore: Firestore = inject(Firestore);
    projects$: Observable<Project[]>

    constructor(){
    const projectCollection = collection(this.firestore, 'Projects');
    this.projects$ = collectionData(projectCollection, {idField: 'id'}) as Observable<Project[]>;
  }


    projects = [
    {
      title: 'Matcha Notetaking App',
      description: "A simple flutter note app that allows users to create, save, edit and delete  notes including special functions, marking favorites, locking notes and daily memos.",
      techStack: ["Flutter", "Dart", "Firestore","Google Play Console", "Android Studio"],
      imageUrl: "",
      link: 'https://play.google.com/store/apps/details?id=com.mfu.matcha_notes&pcampaignid=web_share',
      githubLink: 'https://github.com/ChannMyae-Zaw/matcha_notes'
    },
    {
      title: 'AI Powered Code Documentation Website',
      description: 'Angular + OpenWeather API integration',
      imageUrl: "",
      techStack:["Angular", "Firebase"],
      link: 'https://your-weather-app.netlify.app',
      githubLink: ''
    },
      {
      title: 'AI Powered Code Documentation Extension for VS Code',
      description: 'Angular + OpenWeather API integration',
      imageUrl: "",
      techStack:["Svelte", "Python", "Langchain", "VS code APIs", "ChatGPT", "Gemini", "Deepseek"],
      link: 'https://marketplace.visualstudio.com/items?itemName=FoodokuAthena.code-documentation#:~:text=A%20VS%20Code%20extension%20that%20helps%20you%20automatically,%F0%9F%93%84%20Attach%20your%20coding%20standard%20%28PDF%29%2C%20or%20not%21',
      githubLink: 'https://github.com/ChannMyae-Zaw/Code-Documetation-VS-Code-Plug-in'
    },
      {
      title: 'AI Powered Resume Analyser And Information Extractor',
      description: 'Angular + OpenWeather API integration',
      imageUrl: "",
      techStack:["Python", "Streamlit", "Gemini API"],
      link: 'https://channmyae-zaw-resume-infomation-extractor-app-pkspia.streamlit.app/',
      githubLink: 'https://github.com/ChannMyae-Zaw/Resume-Infomation-Extractor'
    },
      {
      title: 'Portfolio Website',
      description: 'Angular + OpenWeather API integration',
      imageUrl: "",
      techStack:["Angular", "Firebase", "Server-side"],
      link: 'https://your-weather-app.netlify.app',
      githubLink: 'https://github.com/ChannMyae-Zaw/Portfolio'
    },
      {
      title: 'Korean Movie Recommender',
      description: 'Angular + OpenWeather API integration',
      imageUrl: "",
      techStack:["Python", "Streamlit", "HuggingFace Space"],
      link: 'https://huggingface.co/spaces/Chenjelly/Korean-Series-Recommender',
      githubLink: ''
    }
  ];

}
export interface Project{
  id: string;
  title: string;
  description: string;
  imageUrl:string;
  techStack:string[];
  link:string;
  githubLink: string;

}
