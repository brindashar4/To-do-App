import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { EditListComponent } from './list/edit-list/edit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PageNotFoundComponent,
    LoginComponent,
    EditListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
