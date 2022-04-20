import { Component, OnInit, Input } from '@angular/core';
import { News } from '../models/news.model';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() news!: News;

  constructor(
    private newsService: NewsService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  onNews(){
    this.router.navigateByUrl(`news/${this.news.newsId}`)
  }

}
