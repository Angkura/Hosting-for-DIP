import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebappRoutingModule } from './webapp-routing.module';
import { WebappComponent } from './webapp.component';


@NgModule({
  declarations: [WebappComponent],
  imports: [
    CommonModule,
    WebappRoutingModule
  ]
})
export class WebappModule { }
