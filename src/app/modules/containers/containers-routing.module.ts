import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerListComponent } from './container-list/container-list.component';

const routes: Routes = [{ path: "", component: ContainerListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainersRoutingModule { }
