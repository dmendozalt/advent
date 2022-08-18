import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "@app-core/authentication/authentication.service";
// import Swal from "sweetalert2";

@Component({
  selector: "app-login-layout",
  templateUrl: "./login-layout.component.html",
  styleUrls: ["./login-layout.component.scss"],
})
export class LoginLayoutComponent {
  loginForm!: FormGroup;
  clicked: boolean = false;

  constructor(fb: FormBuilder, private router: Router, private authService: AuthenticationService) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  goTo(): void {
    this.clicked = true
    const data: { username: string, password: string } = this.loginForm.getRawValue()

    this.authService.login(data.username, data.password).subscribe(
      (response: any) => {
        this.authService.setToken(response.content.token)
        const userInfo: string = `${response.content.userId}.${response.content.username}`
        localStorage.setItem('user', window.btoa(userInfo))
        this.router.navigate(["/containers"]);
      },
      () => {
        this.loginForm.reset()
        this.clicked = false
      }
    )
  }
}
