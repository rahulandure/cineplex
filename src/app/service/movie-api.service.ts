import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "8e7752f4ceeb83a26ab1d23f0af25d65";

  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  trendingMovieApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/day?api_key=${this.apikey}`);
  }

  getSearchMovie(data:any): Observable<any> {
    console.log(data,'Movie#');    
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }

  getMovieDetails(data:any): Observable<any> {   
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`);
  }

  getMovieVideo(data:any): Observable<any> {   
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`);
  }

  getMovieCast(data:any): Observable<any> {   
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`);
  }

  fetchActionMovie():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`);
  }

  fetchAdventureMovie():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`);
  }
  
  fetchThrillerMovie():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`);
  }
  
  fetchAnimationMovie():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`);
  }

  fetchComedyMovie():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`);
  }

  fetchDocumentryMovie():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`);
  }

  fetchScienceFictionMovie():Observable<any> {
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`);
  }

}
