import { Component,OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UserSearchComponent  } from './user-search.component';
import { Router } from '@angular/router';
@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/templates/dashboard.component.html',
  styleUrls:['app/styles/dashboard.component.css'],
  directives: [UserSearchComponent]

})
export class DashboardComponent { 
  users: User[];
  constructor(
  private userService: UserService,
   private router: Router
  ) { }
  getUsers() {
    this.userService.getUsers()
      .then(users => this.users = users.slice(1, 5));
  }
   ngOnInit() {
    this.getUsers();
  }

  gotoDetail(user:User) { 
  let link=['/detail',user.id];
  console.log("link==",link);
  this.router.navigate(link);
  }
}