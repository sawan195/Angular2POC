import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const APP_ROUTES: Routes = [
  { path: '', component : LoginComponent },
  { path: 'dashboard/:id', component : DashboardComponent }
];

export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
