import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(),provideHttpClient(withFetch())]
};

export const environmentVariables = {
    production: false,
    weatherAPIURL: 'https://weatherapi-com.p.rapidapi.com/current.json',
    xRapidapiHost: 'x-rapidapi-host',
    xRapidapiHostVal:'weatherapi-com.p.rapidapi.com',
    xRapidapiKeyVal: 'ca6e491536mshf34c2bb079bf686p1ef0dfjsndb30ab69ba98',
    xRapidapiKey:'x-rapidapi-key'


};
