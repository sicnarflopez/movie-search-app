import { Component } from '@angular/core';
import { MovieService } from '../_services/movie.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Movie } from '../_model/movie';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
    movies: Movie[] = [];
    searchQuery: string = '';

    constructor(private movieService: MovieService) {}

    searchMovies(input: any) {
        this.movies = [];
        this.movieService.getMovies(input.data).subscribe(data => {
            this.movies = data;
        });
    }
}
