import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { DetailFormComponent } from './components/detail-form/detail-form.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/state/list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailComponent,
    DetailFormComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({ users: userReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
