import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import {HttpModule} from '@angular/http';
import { HttpDemoService } from './http-demo/http-demo.service';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HttpDemoComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [HttpDemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
