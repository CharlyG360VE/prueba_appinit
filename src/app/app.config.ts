import { META_REDUCER as metaReducers } from './core/ngrx/helpers/local-storage-sync.helper';
import { ApplicationConfig, importProvidersFrom, inject, isDevMode, provideAppInitializer } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DataService } from '@core/services/data.service';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { APP_REDUCER } from '@core/ngrx/app.reducer';
import { provideServiceWorker } from '@angular/service-worker';
import { NgxSpinnerModule } from "ngx-spinner";
import { spinnerInterceptor } from './core/interceptors/spinner.interceptor';
import { catchErrorInterceptor } from './core/interceptors/catch-error.interceptor';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(
      withInterceptors([spinnerInterceptor, catchErrorInterceptor])
    ),
    provideAnimationsAsync(),
    provideAppInitializer(() => {
      const settingsProvider = inject(DataService);

      return new Promise<void>(resolve => {
        settingsProvider.loadData()
          .then(() => resolve());
      });
    }),
    provideStore(APP_REDUCER, { metaReducers }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      connectInZone: true
    }),
    importProvidersFrom(
      NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
    ),
    provideServiceWorker('ngsw-worker.js', {
      enabled: isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }), provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};
