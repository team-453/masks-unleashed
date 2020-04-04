import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  selectedUser: User;

  users: User[] = [
    {username: 'Matteo', type: 'Collection Point'},
    {username: 'Esteban', type: 'Recycler'}
  ];

  constructor(private router: Router) {
  }

  login() {
    console.log(this.selectedUser);
    const module = this.selectedUser.type === 'Recycler' ? 'recycler-dashboard' : 'collection-point-dashboard';
    this.router.navigate([module]);
  }
}

interface User {
  username: string;
  type: string;
}
