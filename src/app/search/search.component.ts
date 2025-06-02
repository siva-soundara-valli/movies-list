import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchMoviesForm: FormGroup;
movies: any[] = [];

constructor(private fb: FormBuilder, private sharedService: SharedService) {
  this.searchMoviesForm = this.fb.group({
    searchTerm: [''], 
  });
}
ngOnInit() : void {
 this.searchMoviesForm = this.fb.group({
      searchTerm: ['']   
    });
  this.searchMoviesForm.get('searchTerm')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => this.sharedService.getTitles().pipe(
        map(titles => 
          titles
            .filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))
        )
      ))
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
}