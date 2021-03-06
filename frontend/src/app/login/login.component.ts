import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  selectedUser: User;
  users: Observable<User>;

  constructor(private router: Router, httpClient: HttpClient) {
    this.users = httpClient.get<User>('/user');
  }

  login() {
    const module = this.selectedUser.userType === 'RecyclerUser' ? 'recycler' : 'collector';
    this.router.navigate([module, this.selectedUser.id]);
  }
}

interface User {
  username: string;
  userType: string;
  id: string;
}


