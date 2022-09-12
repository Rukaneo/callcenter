import { CanActivate } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { RequiresAuthGuard } from '../guard/requires-auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private authguard: RequiresAuthGuard) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    alert(" You have been logged out")
}



}
