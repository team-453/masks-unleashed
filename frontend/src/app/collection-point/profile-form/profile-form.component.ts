import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input()
  collectorId: string;

  form: any;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.form = this.formBuilder.group({
      maxCapacity: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.httpClient.get(`/Collector/${this.collectorId}/capacity`)
      .subscribe(maxCapacity => this.form.patchValue({ maxCapacity }));
  }

  update() {
    const payload = {
      amountOfMasks: this.form.value.maxCapacity
    };
    this.httpClient
      .put(`/Collector/${this.collectorId}/capacity`, payload);
  }
}
