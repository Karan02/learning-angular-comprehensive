import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsernameValidators } from '../common/validators/username.validators';

@Component({
  selector: 'signup-form',
  standalone:true,
  imports:[FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
//Reacttive form example 
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
    // FormControl and FormGroup and FormArray ---> AbstractControl (Inheritance)
    username: new FormControl('',{
      validators:[ // sync validators
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace, //Custom validator
    ],
    asyncValidators:[
      UsernameValidators.shouldBeUnique // asynchronous validator
    ]
    }),
    password: new FormControl('',Validators.required)
    }),

  })

  get username() {
    return this.form.get('account.username')
  }

  login(){
    // let isValid = authService.login(this.form.value)
    // if(!isValid) add validations
    // this.form.setErrors() or this.username.setErrors
    this.form.setErrors({
      invalidLogin: true
    })
  }
}
