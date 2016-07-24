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
var user_1 = require('../models/user');
var user_service_1 = require('../services/user.service');
var UserDetailComponent = (function () {
    function UserDetailComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.close = new core_1.EventEmitter();
        this.navigated = false;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("INICIANDO DETAIL COMPONENT");
        this.sub = this.route.params.subscribe(function (params) {
            console.log("parametros", params);
            if (params['id'] != undefined) {
                console.log("parametro[id]", params['id']);
                var id = +params['id'];
                console.log("id", id);
                _this.navigated = true;
                _this.userService.getUser(id)
                    .then(function (user) { return _this.user = user; });
            }
            else {
                _this.navigated = false;
                _this.user = new user_1.User();
            }
            //let id = +params['id'];
            //this.userService.getUser(id)
            //.then(user => this.user = user);
        });
    };
    UserDetailComponent.prototype.save = function () {
        var _this = this;
        this.userService.save(this.user).
            then(function (user) {
            _this.user = user;
            _this.goBack(user);
        })
            .catch(function (error) { return _this.error = error; });
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        console.log("Destruyendo");
        this.sub.unsubscribe();
    };
    UserDetailComponent.prototype.goBack = function (savedUser) {
        if (savedUser === void 0) { savedUser = null; }
        this.close.emit(savedUser);
        if (this.navigated) {
            window.history.back();
        }
        //  window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', user_1.User)
    ], UserDetailComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserDetailComponent.prototype, "close", void 0);
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-user-detail',
            templateUrl: 'app/templates/user-detail.component.html',
            styleUrls: ['app/styles/user-detail.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.ActivatedRoute])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map