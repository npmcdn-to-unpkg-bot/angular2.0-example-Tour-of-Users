import { provideRouter, RouterConfig }  from '@angular/router';
import { UsersComponent } from '../components/users.component';
import { DashboardComponent } from '../components/dashboard.component';
import { UserDetailComponent } from '../components/user-detail.component';

const routes: RouterConfig = [
{
  path: '',
  redirectTo:'/dashboard',
  pathMatch:'full'
},
  {
    path: 'users',
    component: UsersComponent
  },
  {
  path: 'dashboard',
  component: DashboardComponent
}, 
{
  path: 'detail/:id',
  component: UserDetailComponent
},
];

export const appRouterProviders = [
  provideRouter(routes)
];