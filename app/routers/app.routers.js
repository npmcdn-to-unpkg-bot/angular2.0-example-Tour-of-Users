"use strict";
var router_1 = require('@angular/router');
var users_component_1 = require('../components/users.component');
var dashboard_component_1 = require('../components/dashboard.component');
var user_detail_component_1 = require('../components/user-detail.component');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: user_detail_component_1.UserDetailComponent
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routers.js.map