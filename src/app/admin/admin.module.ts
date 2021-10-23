import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSplideModule } from 'ngx-splide';
import { AdminPanelComponent } from './components/login/admin-panel/admin-panel.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginComponent,
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxSplideModule
  ]
})
export class AdminModule { }
