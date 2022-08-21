import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContainersService {

  constructor(private http: HttpClient) { }

  getContainers() {
    let header = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem('token') });

    const requestOptions = { headers: header };
    return this.http.get(environment.EDI, requestOptions)
  }
}
