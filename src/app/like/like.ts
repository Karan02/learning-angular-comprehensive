import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'like',
  imports: [CommonModule,FormsModule],
  templateUrl: './like.html',
  styleUrl: './like.css',
})
export class Like {
  @Input('likesCount') likesCount: number = 0
  @Input('isActive') isActive: boolean = false

  onClick(){
    this.likesCount += (this.isActive) ? -1:1 
    this.isActive = !this.isActive
  }
}
