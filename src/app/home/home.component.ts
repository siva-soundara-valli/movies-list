import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // title: any = [];
  constructor(private sharedService: SharedService) { }
  // getTitle() {
  //   return this.sharedService.getTitles();
  // }
  title = this.sharedService.getTitles();
 allMovies: any[] = [];      
visibleMovies: any[] = [];  
visibleCount = 4;           

ngOnInit() {
  this.allMovies = this.sharedService.getMovies(); 
  this.updateVisibleMovies();
}


updateVisibleMovies() {
  this.visibleMovies = this.allMovies.slice(0, this.visibleCount);
}

loadMore() {
  this.visibleCount += 4;
  this.updateVisibleMovies();
}

}
