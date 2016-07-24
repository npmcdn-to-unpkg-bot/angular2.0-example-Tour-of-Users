import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';																												
import { ActivatedRoute } from '@angular/router';

import { User } from '../models/user'
import { UserService } from '../services/user.service';
@Component({
 selector: 'my-user-detail',
templateUrl:'app/templates/user-detail.component.html',
styleUrls:['app/styles/user-detail.component.css']
})

export class UserDetailComponent implements OnInit,OnDestroy {
  @Input() user:User;
  @Output() close = new EventEmitter();
  error:any;
  sub:any;
  navigated=false;
  constructor(
  private userService: UserService,
  private route: ActivatedRoute) {
}
ngOnInit() {
		console.log("INICIANDO DETAIL COMPONENT");
	 this.sub = this.route.params.subscribe(params => {
	 	console.log("parametros",params);
	 	if(params['id']!=undefined){
	 				console.log("parametro[id]",params['id']);
	 				 let id = +params['id'];
	 				 	 				console.log("id",id);

      				this.navigated = true;
	 				this.userService.getUser(id)
	 				.then(user=>this.user=user);		
	 	}else{
	 		this.navigated=false;
	 		this.user=new User();
	 	}
      //let id = +params['id'];
      //this.userService.getUser(id)
        //.then(user => this.user = user);
    });
}

save(){
	this.userService.save(this.user).
	then(
		user=>{
		this.user=user;
		this.goBack(user);
		})
	.catch(error=>this.error=error)
}

ngOnDestroy() {
	console.log("Destruyendo")
  this.sub.unsubscribe();
}
goBack(savedUser:User=null){
this.close.emit(savedUser);
if(this.navigated){
	window.history.back()
}

//  window.history.back();
}

}