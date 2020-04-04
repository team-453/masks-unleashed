import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-details-form',
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.scss']
})
export class ContactDetailsFormComponent {
  userForm: any;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      fullname: ['']
    });
  }

  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      this.httpClient.post("/api/user", this.userForm.value).subscribe(data => alert("Registered successfully"));
    }
  }
}
