import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './core/authentication/auth.service';


export const appConfig: ApplicationConfig = {
  providers: [ 
    AuthService,
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyBZyMBsbNa08WK2qhgsb-7dMQVW2w3HYWw',
          authDomain: 'pid-rmscm02500-mob.firebaseapp.com',
          databaseURL: 'https://pid-rmscm02500-mob.firebaseio.com',
          projectId: 'pid-rmscm02500-mob',
          storageBucket: 'pid-rmscm02500-mob.appspot.com',
          messagingSenderId: '379810863927',
          appId: '1:379810863927:web:94b9983679539332ae58b2',
        })
      ),
      provideFirestore(() => getFirestore()),
    ]),
  ]
};
