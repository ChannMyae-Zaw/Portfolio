import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../environments/firebase.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "portfolio-1aba7", appId: "1:606412844093:web:1bbbc3afc22aa285844e54", storageBucket: "portfolio-1aba7.firebasestorage.app", apiKey: "AIzaSyCfTQw3Ad6c4te90hs9JFSfyMyvPW5R5pM", authDomain: "portfolio-1aba7.firebaseapp.com", messagingSenderId: "606412844093", measurementId: "G-87NH2HTTJ2" })), provideFirestore(() => getFirestore())]   
};
