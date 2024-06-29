import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/authentication/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../shared/services/http-request/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  submited: boolean = false;
  loading: boolean = false;
  passwordMatch: boolean = false;

  constructor(private router: Router, 
                private auth: AuthService,
                private api: HttpService,
                private fb: FormBuilder){}

  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required ]],
    confirmPassword: ['', [Validators.required]]
  })

  ngOnInit(){};


  route(page:string){
    this.router.navigateByUrl(page);
  }

  get f(){return this.signupForm.controls}

  signup(){
    this.loading = true
    this.submited = true;
    if(this.signupForm.invalid){
      return;
    }

    if(this.signupForm.get('password')?.value === this.signupForm.get('confirmPassword')?.value){
      this.passwordMatch = false;
      console.log(this.signupForm.value)
        this.auth.register(this.signupForm.value).subscribe(
          res=>{
            console.log('signup success response', res);
            let response:any = res
            if(response.status === 'success'){
              this.router.navigateByUrl('/login')
              
            }else{

              alert(response.error.message)
            }
            this.loading = false;
          },
          err=>{
            console.log('signup error response', err);
            this.loading = false;
          }
        )
      } else {
        this.passwordMatch = true;
        console.log('password mismatch')
      }
    }

    

}
