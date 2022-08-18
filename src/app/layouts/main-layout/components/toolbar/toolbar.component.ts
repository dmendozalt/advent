import { Component } from "@angular/core";
import { AuthenticationService } from "@app-core/authentication/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent {

  userName!: string

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    const user = localStorage.getItem('user')
    if (user)
      this.userName = window.atob(user).split('.')[1]
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigateByUrl("login");
  }
}
