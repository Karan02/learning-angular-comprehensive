import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-assignment',
  imports: [FormsModule,CommonModule],
  templateUrl: './control-form-assignment.html',
  styleUrl: './control-form-assignment.css',
})
export class ControlFormAssignment {

  categories = [
    {id:1, name:'Development'},
    {id:2, name: 'Art'},
    {id:3, name:'Languages'}
  ]

  log(x:any){
    console.log(x)
  }
  submit(f:any){
    console.log(f)
  }
}
