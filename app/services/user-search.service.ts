import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { User }           from '../models/user';

@Injectable()
export class UserSearchService {

  constructor(private http: Http) {}

  search(term: string) {
    return this.http
               .get(`app/usuarios/?nombre=${term}+`)
               .map((r: Response) => r.json().data as User[]);
  }
}