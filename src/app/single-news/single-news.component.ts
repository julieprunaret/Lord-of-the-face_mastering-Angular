import { Component, OnInit } from '@angular/core';
import { News } from '../models/news.model';
import { NewsService } from '../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})

export class SingleNewsComponent implements OnInit {
  news!: News;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService

  ) { }

  ngOnInit(): void {
    const newId = +this.route.snapshot.params['id']; 
    //le +avant permet de transformer en type number
    this.news = this.newsService.getNewsById(newId);
  }

  onBack(){
    this.router.navigateByUrl('/news');
  }

}
