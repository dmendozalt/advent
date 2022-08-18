import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";

import { HttpService } from "../http/http.service";

export const TOKEN_NAME = "token";

@Injectable()
export class AuthenticationService {
  constructor(private httpService: HttpService) { }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME) || "";
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) { return true }
    const claims = JSON.parse(window.atob(token.split('.')[1]))
    const unixTime = Math.floor(new Date().getTime() / 1000);

    return claims.exp < unixTime;
  }

  login(username: string, password: string): Observable<unknown> {
    return this.httpService.post(`${environment.API}Authtentication`, {
      username,
      password,
    });
  }

  logout(): void {
    localStorage.removeItem(TOKEN_NAME);
  }
}
