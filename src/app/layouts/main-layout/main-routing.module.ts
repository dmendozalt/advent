import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./main-layout.component";
import { AuthGuard } from "@app-core/auth-guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "containers",
      },
      {
        path: "containers",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/containers/containers.module").then(
            (m) => m.ContainersModule
          ),
      },
      {
        path: "book",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/book/book.module").then(
            (m) => m.BookModule
          ),
      },
      {
        path: "payment",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/payment/payment.module").then(
            (m) => m.PaymentModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
