import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(private sharedService: SharedService) { }
  movies = this.sharedService.getMovies();
  
}
