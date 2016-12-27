import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { userServices } from "./services";
import { DashboardComponent } from './dashboard/dashboard.component';
import {routing} from "./app.routing";
import { PopUpComponent } from './pop-up/pop-up.component';
import {ModalModule} from "ng2-bootstrap/ng2-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    routing
  ],
  providers: [userServices],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}
