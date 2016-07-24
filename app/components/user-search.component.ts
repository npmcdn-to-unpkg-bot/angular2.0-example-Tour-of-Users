    import { Component, OnInit } from '@angular/core';
    import { Router }            from '@angular/router';
    import { Observable }        from 'rxjs/Observable';
    import { Subject }           from 'rxjs/Subject';
    import { UserSearchService } from '../services/user-search.service';
    import { User } from '../models/user';
    @Component({
      selector: 'user-search',
      templateUrl: 'app/templates/user-search.component.html',
      providers: [UserSearchService]
    })
    export class UserSearchComponent implements OnInit {
      users: Observable<User[]>;
      searchSubject = new Subject<string>();
      constructor(
        private userSearchService: UserSearchService,
        private router: Router) {}
      // Push a search term into the observable stream.
      search(term: string) { 
        console.log("Buscando",term)
        this.searchSubject.next(term);
         }
      ngOnInit() {
        this.users = this.searchSubject
          .asObservable()           // cast as Observable
          .debounceTime(300)        // wait for 300ms pause in events
          .distinctUntilChanged()   // ignore if next search term is same as previous
          .switchMap(term => term   // switch to new observable each time
            // return the http search observable
            ? this.userSearchService.search(term)
            // or the observable of empty useres if no search term
            : Observable.of<User[]>([]))
          .catch(error => {
            // Todo: real error handling
            console.log(error);
            return Observable.of<User[]>([]);
          });
      }
      gotoDetail(user: User) {
        let link = ['/detail', user.id];
        this.router.navigate(link);
      }
    }