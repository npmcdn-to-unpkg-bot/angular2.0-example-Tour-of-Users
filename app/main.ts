
//pARA ENGAÑAR Y SIMULAR WEB SERVICE
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './datos/in-memory-users';

//BOOTSTRAP
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './components/app.component';
import { appRouterProviders } from './routers/app.routers';

bootstrap(AppComponent, [
  appRouterProviders,
  HTTP_PROVIDERS,
     { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/