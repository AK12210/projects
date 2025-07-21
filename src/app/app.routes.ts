import {LoginComponent} from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CronComponent} from './cron/cron.component';
import {CroComponent} from './cro/cro.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  },
  {path: 'cron', component: CronComponent},
  {path: 'cro', component: CroComponent},
];
