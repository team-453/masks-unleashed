import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../Order';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input()
  recyclerId: string;

  form: any;

  orders: Order[] = [
    {
      id: 'aaa',
      recycler: 'bbb',
      maskRecyclingCapacity: 1000,
      startingDate: '01.01.2020',
      endDate: '25.01.2020',
      acceptedRecyclingOrders: []
    }
  ];

  editingOrder: Order;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.form = this.formBuilder.group({
      acceptedOrders: [[], Validators.required],
      startingDate: ['', Validators.required],
      maskRecyclingCapacity: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.httpClient.get(`/Recycler/${this.recyclerId}/orders`)
      .subscribe(orders => console.log('[GET] Orders', orders));
  }

  add() {
    const payload = {
      recycler: this.recyclerId,
      maskRecyclingCapacity: this.form.value.maskRecyclingCapacity,
      startingDate: this.form.value.startingDate,
      endDate: this.form.value.endDate,
      acceptedOrders: []
    };
    this.httpClient
      .post(`/Recycler/${this.recyclerId}/orders`, payload)
      .subscribe(data => console.log('[POST] Orders', data));
    this.form.reset();
  }

  edit(order: Order) {
    this.form.patchValue(order);
    this.editingOrder = order;
  }

  update() {
    alert('update order here');
    this.form.reset();
    this.editingOrder = null;
  }

  cancelUpdate() {
    this.form.reset();
    this.editingOrder = null;
  }
}
