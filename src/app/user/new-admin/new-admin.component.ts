import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.css']
})
export class NewAdminComponent implements OnInit {

  data = {
    username: '',
    password: '',
    email: '',
    role: 'user'
}


  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {

    // this.data = fb.group(
    //   {

    //     username: [''],
    //     password: [''],
    //     email: [''],
    //     role: [''],


    // })



   }

  ngOnInit(): void {
  }
  alert30() {
    alert("Login succesful")
  }
  onSubmit(): void {
    this.authService.signup(this.data).subscribe((res) => {
        if (res.status === 'success') {
          this.alert30();
            this.router.navigate(['/home']);


        }
    })
}

}
