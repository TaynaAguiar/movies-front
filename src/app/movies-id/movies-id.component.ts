import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-id',
  templateUrl: './movies-id.component.html',
  styleUrls: ['./movies-id.component.css']
})
export class MoviesIdComponent implements OnInit {

  moviesId: any;
  private sub: any;

  
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.moviesId = this.route.snapshot.params['id'];
    console.log("route", this.route.snapshot.params['id']);
    if (this.moviesId != null) {
      this.getById()
    }
  }

  getById() {
    this.moviesService.getById(this.moviesId).subscribe(data => {
      this.moviesId = data;
      console.log("moviesId", this.moviesId);
    });
  }

}
