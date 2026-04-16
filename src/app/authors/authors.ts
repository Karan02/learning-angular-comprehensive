import { Component } from '@angular/core';
import { AuthorService } from './authors.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authors',
  standalone:true,
  imports: [CommonModule],
  providers:[AuthorService],
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let author of authors">
        {{ author }}
      </li>
    </ul>
  `,
  styleUrl: './authors.css',
})
export class AuthorsComponent {
  title= '3 Authors'
  authors
  constructor(service:AuthorService){
    this.authors = service.getAuthors()
  } 
}
