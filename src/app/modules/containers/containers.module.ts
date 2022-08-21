import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { AngularMaterialModule } from '@shared/angular-material/angular-material.module';
import { ContainerListComponent } from './container-list/container-list.component';


@NgModule({
  declarations: [ContainerListComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ContainersRoutingModule
  ]
})
export class ContainersModule { }
