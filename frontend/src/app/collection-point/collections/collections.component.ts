import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  @Input()
  collectorId: string;
  form: any;
  previousCollections: Collection[] = [];

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private dataService: DataServiceService) {
    this.form = this.formBuilder.group({
      collectedMasksAmount: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.refreshPreviousCollections();
  }

  private refreshPreviousCollections() {
    this.httpClient
      .get(`/Collector/${this.collectorId}/reception`)
      .subscribe((data: Collection[]) => {
        this.previousCollections = data;
        this.dataService.collections.next(data);
      });
  }

  add() {
    const payload = {
      amountOfMasks: this.form.value.collectedMasksAmount,
      receptionDate: new Date()
    };
    this.httpClient
      .post(`/Collector/${this.collectorId}/reception`, payload)
      .subscribe(data => {
        this.refreshPreviousCollections();
        this.dataService.triggerCapacityNotification.next();
      });
  }
}

interface Collection {
  amountOfMasks: number;
  receptionDate: Date;
}
