import { RosterService } from './service/roster.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RosterComponent } from './roster/roster.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { NewAdminComponent } from './user/new-admin/new-admin.component';
import { LoginComponent } from './user/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RosterComponent,
    NavbarComponent,
    HomeComponent,
    ChartsComponent,
    SearchComponent,
    EditComponent,
    CreateComponent,
    NewAdminComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,




  ],
  providers: [RosterService,
  {
    provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
