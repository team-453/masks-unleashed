import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input()
  recyclerId: string;

  form: any;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.form = this.formBuilder.group({
      maxCapacity: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.httpClient.get(`/Recycler/${this.recyclerId}/capacity`)
      .subscribe(maxCapacity => this.form.path({maxCapacity}));
  }

  update() {
    const payload = {
      amountOfMasks: this.form.value.maxCapacity
    };
    this.httpClient
      .put(`/Recycler/${this.recyclerId}/capacity`, payload);
  }

}
