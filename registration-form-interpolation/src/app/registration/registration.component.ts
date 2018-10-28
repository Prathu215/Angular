import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { RegistrationService } from './registration.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: '',
      email: '',
      password: ''
    })
  }


  saveUsers() {
    let r = Object.assign({}, this.registrationForm.value);
    this.registrationService.saveUsers(r).subscribe(
      (res) => console.log(res)
    )

  }



}
