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
      description: 'A powerful VS Code extension that uses AI to automatically generate code documentation, rename elements consistently across files, and help you write cleaner, more maintainable code — all from a simple sidebar. Save time, reduce manual work, and keep your codebase well-documented with ease.',
      imageUrl: "",
      techStack:["Svelte", "Python", "Langchain", "VS code APIs", "ChatGPT", "Gemini", "Deepseek"],
      link: 'https://marketplace.visualstudio.com/items?itemName=FoodokuAthena.code-documentation#:~:text=A%20VS%20Code%20extension%20that%20helps%20you%20automatically,%F0%9F%93%84%20Attach%20your%20coding%20standard%20%28PDF%29%2C%20or%20not%21',
      githubLink: 'https://github.com/ChannMyae-Zaw/Code-Documetation-VS-Code-Plug-in'
    },
      {
      title: 'AI Powered Resume Analyser And Information Extractor',
      description: 'An AI-powered web app that extracts and summarizes key details from resumes, including education, experience, skills, and contact information. Built with Python, NLP models, and a user-friendly interface, it streamlines candidate review by converting multiple resume files into a structured and searchable format.',
      imageUrl: "",
      techStack:["Python", "Streamlit", "Gemini API"],
      link: 'https://channmyae-zaw-resume-infomation-extractor-app-pkspia.streamlit.app/',
      githubLink: 'https://github.com/ChannMyae-Zaw/Resume-Infomation-Extractor'
    },
      {
      title: 'Portfolio Website',
      description: 'A responsive, modern portfolio built with Angular and Firebase to showcase projects, blogs, and skills. It features Firebase Authentication for admin side,  dynamic blog filtering, and Firestore integration for smooth content management. Designed to highlight both technical expertise and project experience in a clean, user-friendly layout.',
      imageUrl: "",
      techStack:["Angular", "Firebase", "Server-side"],
      link: 'https://your-weather-app.netlify.app',
      githubLink: 'https://github.com/ChannMyae-Zaw/Portfolio'
    },
      {
      title: 'Korean Series Recommender',
      description: 'A content-based movie recommendation system built on a curated Korean films dataset. It analyzes genres, keywords, and user preferences to suggest best fitting series according to user input. Designed for K-series fans, this project combines data science, natural language processing, and machine learning to deliver personalized recommendations.',
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
