import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  contactMethods = [
    {id:1,name:'Email'},
    {id:2,name:'Phone'},
    
  ]
  log(x:any){ console.log(x) }

  submit(f:any){
    console.log(f)
  }
}
