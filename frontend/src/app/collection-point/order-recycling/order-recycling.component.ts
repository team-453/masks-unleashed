import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-order-recycling',
  templateUrl: './order-recycling.component.html',
  styleUrls: ['./order-recycling.component.scss']
})
export class OrderRecyclingComponent implements OnInit {
  @Input()
  collectorId: string;

  maxCapacity?: number;
  masksOnStorage?: number;
  remainingCleanMasks?: number;

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.refreshCapacity();
    this.refreshPreviousCollections();
  }

  private refreshCapacity() {
    this.dataService.maxCapacity
      .subscribe((maxCapacity: number) => {
        this.maxCapacity = maxCapacity
        this.calculateRemainingCleanMasks();
      });
  }

  private calculateRemainingCleanMasks() {
    // TODO Won't work if any 0
    if (this.maxCapacity && this.masksOnStorage) {
      this.remainingCleanMasks = this.maxCapacity - this.masksOnStorage;
    }
  }

  private refreshPreviousCollections() {
    this.dataService.collections
      .subscribe((data: Collection[]) => {
        this.masksOnStorage = this.sumAmountOfMasks(data);
        this.calculateRemainingCleanMasks();
      });
  }

  private sumAmountOfMasks(data: Collection[]) {
    return data.map(c => c.amountOfMasks).reduce((prev, current) => prev + current, 0);
  }
}

interface Collection {
  amountOfMasks: number;
  receptionDate: Date;
}