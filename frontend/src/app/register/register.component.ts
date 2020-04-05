import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: any;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      fullname: [''],
      street: [''],
      city: [''],
      postal: [''],
      usertype: ['', Validators.required],
    });
  }

  saveUser() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      console.log('register', this.registerForm.value);
      this.httpClient
        .post('/user', this.registerForm.value)
        .subscribe(userId => {
          const module = this.registerForm.value.usertype === 'RecyclerUser' ? 'recycler-dashboard' : 'collection-point-dashboard';
          this.router.navigate([module, userId]);
        });
    }
  }

}
