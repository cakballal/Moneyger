import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: any;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);
  }

  isLoggedIn() {
    return(this.user !== null);
  }
}
