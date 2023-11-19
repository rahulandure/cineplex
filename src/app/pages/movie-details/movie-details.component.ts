import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  getMovieDetailsResult:any;
  getMovieVideoDetailsResult:any;
  getMovieCastDetailsResult:any;

  constructor(private movieApiService: MovieApiServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    let getParamId = this.route.snapshot.paramMap.get('id');
    console.log(getParamId,'paramId##')
    this.movieDetailsData(getParamId);
    this.movieVideoData(getParamId);
    this.movieCastData(getParamId);
  }

  movieDetailsData(id:any) {
    this.movieApiService.getMovieDetails(id).subscribe((result) => {
      console.log(result,'MovieDetails##');
      this.getMovieDetailsResult = result;
    })
  }

  movieVideoData(id:any) {
this.movieApiService.getMovieVideo(id).subscribe((result) => {
  console.log(result,'MovieVideo##');
  result.results.forEach((element:any) => {
    if(element.type == "Trailer"){
      this.getMovieVideoDetailsResult = element.key;
    }
  });
  
})
  }

  movieCastData(id:any) {
this.movieApiService.getMovieCast(id).subscribe((result) => {
  console.log(result,'MovieCast##');
  this.getMovieCastDetailsResult = result.cast;
})
  }
}
