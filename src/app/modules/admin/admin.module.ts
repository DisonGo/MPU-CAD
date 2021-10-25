import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSplideModule } from 'ngx-splide';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { PreviewComponent } from './components/preview/preview.component';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { ProjectListComponent } from './components/admin-projects/project-list/project-list.component';
import { AdminImageListComponent } from './components/admin-image-list/admin-image-list.component';
import { AdminImagesComponent } from './components/admin-images/admin-images.component';
import { UserListComponent } from './components/admin-users/user-list/user-list.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    LoginComponent,
    AdminPanelComponent,
    AdminHeaderComponent,
    PreviewComponent,
    AdminProjectsComponent,
    AdminUsersComponent,
    ProjectListComponent,
    AdminImageListComponent,
    AdminImagesComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgxSplideModule
  ]
})
export class AdminModule { }
