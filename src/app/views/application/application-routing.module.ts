import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'',
        redirectTo:'app',
        pathMatch:'full'
      },
      {
        path:'app',
        component:ApplicationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
