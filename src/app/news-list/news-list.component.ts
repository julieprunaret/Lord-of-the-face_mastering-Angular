import { Component, OnInit } from '@angular/core';
import { News } from '../models/news.model';
import { NewsComponent } from '../news/news.component'; 
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit {
  news!: News[];

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.news = this.newsService.getAllNews();
  }
}
