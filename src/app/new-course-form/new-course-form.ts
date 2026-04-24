import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './new-course-form.html',
  styleUrl: './new-course-form.css',
})
//Reacttive form example 
export class NewCourseForm {
  // form = new FormGroup({
  //   name: new FormControl('',Validators.required),
  //   contact: new FormGroup({
  //     email: new FormControl(),
  //     phone: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // })
  form

  //second approach, formbuilder
  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['',Validators.required],
      contact: fb.group({
        email:[],
        phone:[]
      }),
      topics: fb.array([])
    })
  }

  addTopic(topic: HTMLInputElement){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value))
    topic.value = ''
  }

  removeTopic(topic:AbstractControl){
  let index =  this.topics.controls.indexOf(topic)
  this.topics.removeAt(index)
  }

  get topics(){
    return this.form.get('topics') as FormArray
  }
}
