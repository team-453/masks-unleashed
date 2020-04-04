import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input()
  collectorId: string;

  form: any;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private dataService: DataServiceService) {
    this.form = this.formBuilder.group({
      maxCapacity: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

  private refresh() {
    this.httpClient.get(`/Collector/${this.collectorId}/capacity`)
      .subscribe((maxCapacity: number) => {
        this.form.patchValue({ maxCapacity });
        this.dataService.maxCapacity.next(maxCapacity);
      });
  }

  update() {
    this.httpClient
      .put(`/Collector/${this.collectorId}/capacity`, this.form.value.maxCapacity)
      .subscribe(_ => this.refresh());
  }
}
