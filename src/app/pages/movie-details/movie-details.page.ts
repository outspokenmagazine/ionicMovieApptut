import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie, movieDetails, MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie!:movieDetails;
  imageBaseUrl = environment.images;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.movieService.getMovieDetails(this.id).subscribe((res) => {
      this.movie = res;
    });
  }

  openHomepage(url: string) {
    window.open(url, '_blank');
  }
}
