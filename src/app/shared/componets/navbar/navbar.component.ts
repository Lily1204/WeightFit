import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { AutorizacionService } from '../../services/autorizeService';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor( private router: Router,
    private service: AutorizacionService, ) { }

  logout() {
    this.service.logout();
  }
}
