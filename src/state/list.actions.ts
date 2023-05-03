import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models';

export const addUsers = createAction(
  '[UserList Component] addUsers',
  props<{ users: User[] }>()
);
export const updateUser = createAction(
  '[UserList Component] updateUser',
  props<{ id: number; entry: { key: string; value: string } }>()
);
export const setCurrentUser = createAction(
  '[UserList Component] setUser',
  props<{ id: number }>()
);
