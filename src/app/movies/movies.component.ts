import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  constructor(private sharedService: SharedService, private route : ActivatedRoute) { }
 ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    const allMovies = this.sharedService.getMovies(); 
    this.movie = allMovies.find(m => m.title == title);
  }  
  movie: any; 
}
