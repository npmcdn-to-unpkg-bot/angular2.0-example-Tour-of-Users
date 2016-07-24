import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UserDetailComponent } from './user-detail.component';


@Component({
  selector: 'my-users',
  templateUrl:'app/templates/users.component.html',
  styleUrls:['app/styles/users.component.css'],
  directives: [UserDetailComponent]
})

export class UsersComponent implements OnInit{ 
  users:User[];
  selectedUser: User;
  addingUser=false;
  error:any;
  constructor(
  private userService: UserService,
  private router:Router
  ) { }


   getUsers(){
    this.userService.getUsers().then(users => {
      console.log("USUARIOS EN USER.COMPONENT",users)
      this.users = users}).catch(error=>{
        console.log("ERORRRRRRR",error)
        this.error=error});
  }
    ngOnInit() {
    this.getUsers();
  }
    onSelect(user: User) { 
      this.selectedUser = user; 
      this.addingUser=false;
    }


  gotoDetail() { 
  let link=['/detail',this.selectedUser.id];
  this.router.navigate(link);
  }
addUser() {
  this.addingUser = true;
  console.log("Adicionar usuario",this.addingUser);

  this.selectedUser = null;
}

close(savedUser: User) {
  this.addingUser = false;
    console.log("Adicionar usuario2",this.addingUser);

  if (savedUser) { this.getUsers(); }
}

deleteUser(user: User, event: any) {
  event.stopPropagation();
  this.userService
      .delete(user)
      .then(res => {
        this.users = this.users.filter(h => h !== user);
        if (this.selectedUser === user) { this.selectedUser = null; }
      })
      .catch(error => this.error = error);
}
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/