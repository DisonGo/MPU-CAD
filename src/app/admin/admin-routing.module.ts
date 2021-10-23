import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { AdminPanelComponent } from './components/login/admin-panel/admin-panel.component';
import { LoginComponent } from './components/login/login.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
