import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent {
  @Input()
  collectorId: string;

  form: any;

  previousCollections: Order[] = [
    {amount: 500, date: '11.02.2020'},
    {amount: 120, date: '18.03.2020'}
  ];

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.form = this.formBuilder.group({
      collectedMasksAmount: ['', Validators.required],
    });
  }

  add() {
    const payload = {
      collectedMasksAmount: this.form.value.collectedMasksAmount
    };
    console.log(payload);
    this.httpClient
      .put(`/Orders/${this.collectorId}`, payload)
      .subscribe(data => console.log('[PUT] Capacity', data));
  }
}

interface Order {
  amount: number;
  date: string;
}
