import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors/authors';
import {FavoriteChangedEventArgs} from './courses.component'
import { Like } from './like/like';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CoursesComponent,
    AuthorsComponent,
    Like,
    CommonModule
    ],
  providers:[], // dependencies of components
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('hello-world');
  viewMode = 'map-xyz'
  courses = [1,2]
  post = {
    title: 'Title',
    isFavorite: true
  }
  onFavoriteChanged(eventArgs:FavoriteChangedEventArgs){
    console.log('Favorite changed:',eventArgs)
  }
  tweet = {
    body:'...',
    likesCount:10,
    isLiked: true
  }
}
