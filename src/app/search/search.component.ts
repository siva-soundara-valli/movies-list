import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, map, pipe, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchMoviesForm: FormGroup;
// movies: any[] = [];

constructor(private fb: FormBuilder, private sharedService: SharedService, private router: Router) {
  this.searchMoviesForm = this.fb.group({
    searchTerm: [''], 
  });
}
movies: { title: string }[] = [];

ngOnInit(): void {
  this.searchMoviesForm.get('searchTerm')?.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((value: string) =>
      this.sharedService.getMoviess().pipe(
        map((movies: { title: string }[]) =>
          movies.filter(movie =>
            movie.title.toLowerCase().includes(value.toLowerCase())
          )
        )
      )
    )
  ).subscribe(filteredMovies => {
    this.movies = filteredMovies;
  });

    }
handleFetchedMovies(movies: any[]) {
  // this.sharedService.setMovies(movies);
}
onSearch() {
  console.log('Search initiated');
}
getMovie(){
  this.router
}

goTo(path: string, movie: any) {
  this.router.navigate(['/' + path, movie]); // or use movie.id
}

}