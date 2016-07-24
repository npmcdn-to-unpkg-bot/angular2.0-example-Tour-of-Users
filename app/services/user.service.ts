import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/user';

//import { USERS } from './mock-users';
@Injectable()
export class UserService {
  private usersUrl = 'app/usuarios';  // URL to web api
  constructor(private http: Http) { }

//getUsers(){
//	return Promise.Uesolve(USERS);;
//}
//


getUsers() {
    return this.http.get(this.usersUrl)
               .toPromise()
              .then(response => {
              	console.log("datos recibidos",response)
              	return response.json().data as User[]})
               .catch(error=>{
               	console.log("aqui hay un error",error);
               	this.handleError
               });

  }

getUser(id:number){
	return this.getUsers().then(users=>users.find(user=>user.id===id));;
}

//getUsersSlowly() {
  //return new Promise<User[]>(resolve =>
    //setTimeout(() => resolve(USERS), 2000) // 2 seconds
  //);
//}

private post(user: User): Promise<User> {
  let headers = new Headers({
    'Content-Type': 'application/json'});

  return this.http
             .post(this.usersUrl, JSON.stringify(user), {headers: headers})
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
}

private put(user: User) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  let url = `${this.usersUrl}/${user.id}`;

  return this.http
             .put(url, JSON.stringify(user), {headers: headers})
             .toPromise()
             .then(() => user)
             .catch(this.handleError);
}

delete(user: User) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  let url = `${this.usersUrl}/${user.id}`;

  return this.http
             .delete(url, {headers: headers})
             .toPromise()
             .catch(this.handleError);
}

private handleError(error: any) {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

save(user: User): Promise<User>  {
  if (user.id) {
    return this.put(user);
  }
  return this.post(user);
}
}