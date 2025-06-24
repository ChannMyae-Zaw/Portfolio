import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { firebaseConfig } from '../environments/firebase.config';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      FormsModule,
      ReactiveFormsModule,
      NgxEditorModule.forRoot({
        locals: {
          bold: 'Bold',
          italic: 'Italic',
          code: 'Code',
          blockquote: 'Blockquote',
          underline: 'Underline',
          strike: 'Strike',
          bullet_list: 'Bullet List',
          ordered_list: 'Ordered List',
          heading: 'Heading',
          h1: 'Header 1',
          h2: 'Header 2',
          h3: 'Header 3',
          h4: 'Header 4',
          h5: 'Header 5',
          h6: 'Header 6',
          align_left: 'Left Align',
          align_center: 'Center Align',
          align_right: 'Right Align',
          align_justify: 'Justify',
          text_color: 'Text Color',
          background_color: 'Background Color',
          url: 'URL',
          text: 'Text',
          openInNewTab: 'Open in new tab',
          insert: 'Insert',
          altText: 'Alt Text',
          title: 'Title',
          remove: 'Remove',
          enterValidUrl: 'Please enter a valid URL',
        },
      })
    ),
  ],
};
