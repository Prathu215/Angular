import { Component, OnInit } from '@angular/core';
import { HttpDemoService } from './http-demo.service';

@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css'],
  providers: [HttpDemoService]
})
export class HttpDemoComponent implements OnInit {

  constructor(private _http:HttpDemoService) { }

  public users:any;

  ngOnInit() {
    console.log(this._http.getUsers().then(res=>this.users=res._body));
  }

}
