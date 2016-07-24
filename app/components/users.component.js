"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('../services/user.service');
var user_detail_component_1 = require('./user-detail.component');
var UsersComponent = (function () {
    function UsersComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.addingUser = false;
    }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) {
            console.log("USUARIOS EN USER.COMPONENT", users);
            _this.users = users;
        }).catch(function (error) {
            console.log("ERORRRRRRR", error);
            _this.error = error;
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
        this.addingUser = false;
    };
    UsersComponent.prototype.gotoDetail = function () {
        var link = ['/detail', this.selectedUser.id];
        this.router.navigate(link);
    };
    UsersComponent.prototype.addUser = function () {
        this.addingUser = true;
        console.log("Adicionar usuario", this.addingUser);
        this.selectedUser = null;
    };
    UsersComponent.prototype.close = function (savedUser) {
        this.addingUser = false;
        console.log("Adicionar usuario2", this.addingUser);
        if (savedUser) {
            this.getUsers();
        }
    };
    UsersComponent.prototype.deleteUser = function (user, event) {
        var _this = this;
        event.stopPropagation();
        this.userService
            .delete(user)
            .then(function (res) {
            _this.users = _this.users.filter(function (h) { return h !== user; });
            if (_this.selectedUser === user) {
                _this.selectedUser = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'my-users',
            templateUrl: 'app/templates/users.component.html',
            styleUrls: ['app/styles/users.component.css'],
            directives: [user_detail_component_1.UserDetailComponent]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=users.component.js.map