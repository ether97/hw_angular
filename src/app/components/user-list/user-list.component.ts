import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models';
import { setCurrentUser } from './../../../state/list.actions';
import { Store, select } from '@ngrx/store';
import { getCurrentUserId, getUsers } from 'src/state/list.reducer';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users$: Observable<User[]>;
  currentUserId$: Observable<number>;

  constructor(private store: Store<{ users: User[]; currentUserId: number }>) {
    this.users$ = this.store.pipe(select(getUsers));
    this.currentUserId$ = this.store.pipe(select(getCurrentUserId));
  }

  setCurrentUserId() {
    window.alert('hi');
    this.store.dispatch(setCurrentUser({ id: 10 }));
  }
}
