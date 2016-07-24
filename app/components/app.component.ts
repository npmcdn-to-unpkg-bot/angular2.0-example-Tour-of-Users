    import { Component }       from '@angular/core';
    import { ROUTER_DIRECTIVES } from '@angular/router';
    import { UserService } from '../services/user.service';
    import '../extensions/rxjs-extensions';


    @Component({
      selector: 'my-app',
     template: `
  <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
    <a [routerLink]="['/users']" routerLinkActive="active">Users</a>
  </nav>
  <router-outlet></router-outlet>
`,
styleUrls: ['app/styles/app.component.css'],
  directives: [ROUTER_DIRECTIVES],

      providers: [
        UserService
      ]
    })
    export class AppComponent {
      title = 'Tour of Heroes';
    }