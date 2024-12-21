import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../_model/movie';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})

export class MovieService {
    constructor(private http: HttpClient) {}

    getMovies(query: string): Observable<Movie[]> {
        return this.http.get<Movie[]>(`${environment.apiUrl}?title=${query}`);
    }
}
