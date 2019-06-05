import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from './_services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Moneyger';

  constructor(
    private router: Router,
    private service: AuthService
  ) {
    if(!service.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

}
