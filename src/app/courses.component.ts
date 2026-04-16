import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesService } from "./courses.service";
import { FormsModule } from "@angular/forms";
import { SummaryPipe } from "./summary.pipe";
import { TitleCasePipe } from "./title-case-pipe";

@Component({
  selector: 'courses',
  standalone: true,
  imports:[CommonModule,FormsModule,SummaryPipe,TitleCasePipe],
  providers:[CoursesService],

  // styling order matters, green will be overridden with blue
  styles:[
    `
    .bi {
      color: green
    }
    `
  ],
  styleUrls:['./app.css'],
  templateUrl:'./courses.component.html',
  encapsulation: ViewEncapsulation.Emulated // emulates concept of shadowDOM ,applying scope to our styles, 
  // don't let parent component styles override this component style - Shadow DOM
})

export class CoursesComponent implements OnInit {
  @Input('isFavorite') starSelected: boolean | undefined // alias 'isFavorite'
  @Output() change = new EventEmitter()
  txt = ''
  text = `Lorem Ipsum is simply a dummy text`
  isActive = true
  title = 'List of courses'
  courses
  email2="me@example.com"
  course = {
    title: 'The Complete Angular Course',
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date
  }
  
  constructor(service: CoursesService){
    this.courses = service.getCourses()
  }

  ngOnInit(): void {
    
  }
  
  onStarChange($event:any){
    $event.stopPropagation() // stops event bubbling
    this.starSelected = !this.starSelected
    this.change.emit({newValue:this.starSelected})
  }

  onKeyUp(email: any){ // template variable, #email
    console.log(email)
  }
  onSave($event: any){
    $event.stopPropagation() // stops event bubbling
    console.log('Clicked',$event)
  }
  onKeyUp2(){
   console.log(this.email2) // two way binding
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}