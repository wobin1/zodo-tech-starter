import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'zodos_tech_starter';
  faCoffee = faCoffee;

  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(){
    this.formGroup.valueChanges.subscribe((val) => console.log(this.formGroup))
  }

  onSubmit(){
    console.log([this.formGroup.controls.email.value, this.formGroup.controls.password.value])
  }

}
