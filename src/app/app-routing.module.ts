import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponentComponent } from './components/main-component/main-component.component';

const routes: Routes = [
  {
    path:'',
    component: MainComponentComponent
  },
  {
    path:"admin",
    loadChildren: ()=>import('./modules/admin/admin.module').then(mod=>mod.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
