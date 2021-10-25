import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/auth.guard';
import { AdminImagesComponent } from './components/admin-images/admin-images.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { LoginComponent } from './components/login/login.component';
import { PreviewComponent } from './components/preview/preview.component';
import { AdminLayoutComponent } from './pages/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path:'',
    component:AdminLayoutComponent,
    children:[
      {
        path:'',
        component:LoginComponent
      },
      {
        path:"panel",
        canActivate:[AuthGuard],
        component:AdminPanelComponent,
        children:[
          {
            path:'',
            component: PreviewComponent
          },
          {
            path:'preview',
            component: PreviewComponent
          },
          {
            path:'projects',
            component: AdminProjectsComponent
          },
          {
            path:'users',
            component: AdminUsersComponent
          },
          {
            path:'imgs',
            component: AdminImagesComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
