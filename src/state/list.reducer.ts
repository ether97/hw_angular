import {
  createFeature,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { updateUser, addUsers, setCurrentUser } from './list.actions';
import { User } from 'src/app/models';

export interface State {
  users: User[];
  currentUserId: number;
}

export const initialState: State = {
  users: [],
  currentUserId: 0,
};

export const userReducer = createReducer(
  initialState,
  on(addUsers, (state, { users }) => ({ ...state, users: users })),
  on(updateUser, (state, { id, entry }) => {
    let prevState = [...state.users];
    let item = state.users.find((user) => user.id === id);
    let { key, value } = entry;
    let newItem = { ...item, [key]: value };
    prevState.push(newItem as User);
    return { ...state, users: prevState };
  }),
  on(setCurrentUser, (state, { id }) => ({ ...state, currentUserId: id }))
);

export const getUsers = (state: State) => state.users;
export const getCurrentUserId = (state: State) => state.currentUserId;
