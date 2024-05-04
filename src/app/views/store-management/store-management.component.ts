import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrl: './store-management.component.scss'
})
export class StoreManagementComponent {

  currentRoute!:string;
  active!:string;
  confirmSignOut:boolean=false;


  constructor(private router: Router ,private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    let currentRoute = this.router.url;
    this.currentRoute = currentRoute.slice(1);
    this.active = this.currentRoute
    console.log('this is the current state',this.currentRoute, );
  }

  route(page:any){
    console.log('this is the page', page)
    this.active = page
    this.router.navigateByUrl(page)
   }

   signOutConfirmation(){
    console.log('signing out')
    this.confirmSignOut =!this.confirmSignOut;
    console.log(this.confirmSignOut)
   }

   logout(){
    this.signOutConfirmation()
    console.log('signed out')
   }

}
