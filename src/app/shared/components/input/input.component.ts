import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms' 

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() inputId!:string;
  @Input() control = new FormControl();
  @Input() label!:string;
  @Input() type!:string;
  @Input() placeholder!:string;


  errorMessages: Record<string, string> = {
    required: 'This field is required',
    email: 'This email is invalid'
  }

}
