import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SingleNewsComponent } from './single-news/single-news.component';


const routes: Routes = [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
  { path: '', component: LandingPageComponent },
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: 'news', component: NewsListComponent },
  { path: 'news/:id', component: SingleNewsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}