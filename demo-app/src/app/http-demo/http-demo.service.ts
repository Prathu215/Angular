import { Injectable } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpDemoService {

  constructor(private _http:Http) { }

  private baseURL:string="https://jsonplaceholder.typicode.com";

  public getUsers():Promise<any>{
    return this._http.get(this.baseURL+"/users/9").toPromise(); 
  }

}
