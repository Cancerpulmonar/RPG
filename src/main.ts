import { bootstrapApplication } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';
import { RouteReuseStrategy } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideHttpClient(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideAuth0({
      domain: 'dev-lm8rb66pb56mdn1o.eu.auth0.com',
      clientId: 'zGKkMOkZ6UcavDGLZB85SPtboC4WIqjn',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
});
