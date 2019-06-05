import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component'
import {LoginPageComponent} from './login-page/login-page.component'
import {NotFoundPageComponent} from './not-found-page/not-found-page.component'

const routes: Routes = [
  {path: '', component: DashboardPageComponent},
  {path: 'login', component: LoginPageComponent},

  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
