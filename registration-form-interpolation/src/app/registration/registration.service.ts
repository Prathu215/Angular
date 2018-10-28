import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';



@Injectable()
export class RegistrationService {

  private baseUrl = "http://localhost:8080/AngularJs/users";
  constructor(private http: Http) { }

  public getUsers() {


  }
  public saveUsers(formData: any): Observable<any> {
    //let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(this.baseUrl, formData, options).map(res=>res.json());
  }
}


