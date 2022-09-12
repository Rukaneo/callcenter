import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = {
    username: '',
    password: '',
    email: '',
    role: 'user'
}

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.authService.login(this.data).subscribe(res => {
        if (res.status === 'success') this.router.navigate(['/roster']);
    })
}
}
