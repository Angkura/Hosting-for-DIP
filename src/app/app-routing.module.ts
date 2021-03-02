import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: '',
    loadChildren:()=> import('./views/application/application.module')
    .then(m=>m.ApplicationModule)
  },
  {
    path:'',
    loadChildren:()=> import('./views/webapp/webapp.module')
    .then(m=>m.WebappModule)
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'**',
    redirectTo: 'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
