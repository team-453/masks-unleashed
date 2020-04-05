import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../Order';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  @Input()
  recyclerId: string;
  form: any;
  orders: Order[] = [];
  editingOrder: Order;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      acceptedOrders: [[], Validators.required],
      startingDate: ['', Validators.required],
      maskRecyclingCapacity: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  private showSuccessSnackBar() {
    this.snackBar.open('🎉 You have added an order! 🎉', '', {
      duration: 3000,
      verticalPosition: 'top',
    });
  }

  ngOnInit(): void {
    this.refreshOrders();
  }

  refreshOrders() {
    this.httpClient.get(`/Recycler/${this.recyclerId}/orders`)
      .subscribe((orders: Order[]) => this.orders = orders);
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
      .subscribe(data => {
        this.refreshOrders();
        this.showSuccessSnackBar();
      });
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
