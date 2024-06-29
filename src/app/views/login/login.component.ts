import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../shared/services/http-request/http.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router, private httpService: HttpService, private fb: FormBuilder){}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required ]],
  })

  route(page:string){
    this.router.navigateByUrl(page);
  }


  login(){
    console.log('login form data', this.loginForm.value )
    this.httpService.postData('api/auth/login/', this.loginForm.value).subscribe(
      res=>{
        console.log('login request response', res)
        this.route('dashboard')
      }, err=>{
        console.log('login error', err.error)
      }
    )
  }


}
