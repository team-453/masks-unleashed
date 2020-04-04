import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: any;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      fullname: [''],
      street: [''],
      city: [''],
      postal: [''],
      type: ['', Validators.required],
    });
  }

  saveUser() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      console.log('register', this.registerForm.value);
      //this.httpClient.post('/api/user', this.registerForm.value).subscribe(data => alert('Registered successfully'));
    }
  }

}
