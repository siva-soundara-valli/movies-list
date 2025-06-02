import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatCardModule  } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedService } from './shared.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatCardModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies-list';
    constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate(['/' + path]);
  }

}
