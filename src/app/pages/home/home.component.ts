import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private movieApiService: MovieApiServiceService) { }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult:any = [];
  adventureMovieResult:any = [];
  thrillerMovieResult:any = [];
  animationMovieResult:any = [];
  comedyMovieResult:any = [];
  documentryMovieResult:any = [];
  scienceMovieResult:any = [];

  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData();
    this.actionMovieData();
    this.adventureMovieData();
    this.thrillerMovieData();
    this.animationMovieData();
    this.comedyMovieData();
    this.documentryMovieData();
    this.scienceMovieData();
  }

  bannerData() {
    this.movieApiService.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#')
      this.bannerResult = result.results;
    })
  }

  trendingMovieData() {
    this.movieApiService.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trending movie result#')
      this.trendingMovieResult = result.results;
    })
  }

  actionMovieData() {
    this.movieApiService.fetchActionMovie().subscribe((result) => {
      this.actionMovieResult = result.results;
    })
  }

  adventureMovieData() {
    this.movieApiService.fetchAdventureMovie().subscribe((result) => {
      this.adventureMovieResult = result.results;
    })
  }

  thrillerMovieData() {
    this.movieApiService.fetchThrillerMovie().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    })
  }

  animationMovieData() {
    this.movieApiService.fetchAnimationMovie().subscribe((result) => {
      this.animationMovieResult = result.results;
    })
  }

  comedyMovieData() {
    this.movieApiService.fetchComedyMovie().subscribe((result) => {
      this.comedyMovieResult = result.results;
    })
  }

  documentryMovieData() {
    this.movieApiService.fetchDocumentryMovie().subscribe((result) => {
      this.documentryMovieResult = result.results;
    })
  }

  scienceMovieData() {
    this.movieApiService.fetchScienceFictionMovie().subscribe((result) => {
      this.scienceMovieResult = result.results;
    })
  }

}
