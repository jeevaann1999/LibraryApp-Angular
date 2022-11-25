import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BooksEntryComponent } from './books-entry/books-entry.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"userreg",
    component:UserRegistrationComponent
  },
  {
    path:"userlogin",
    component:UserLoginComponent
  },
  {
    path:"entry",
    component:BooksEntryComponent
  },
  {
    path:"view",
    component:ViewBooksComponent
  },
  {
    path:"search",
    component:BookSearchComponent
  },
  {
    path:"delete",
    component:BookDeleteComponent
  },
  {
    path:"edit",
    component:BookEditComponent
  },
  {
    path:"issue",
    component:BookIssueComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    BooksEntryComponent,
    ViewBooksComponent,
    BookSearchComponent,
    BookDeleteComponent,
    BookEditComponent,
    BookIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
