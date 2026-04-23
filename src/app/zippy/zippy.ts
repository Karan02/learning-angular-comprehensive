import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  imports: [CommonModule],
  templateUrl: './zippy.html',
  styleUrl: './zippy.css',
})
export class Zippy {
  @Input('title') title:string | undefined
  isExpanded: boolean = false

  toggle(){
    this.isExpanded = !this.isExpanded
  }
}
