import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  // lien du json https://lottiefiles.com/72707-magic-edit
  options: AnimationOptions = {
    path: '/assets/magic-door.json',
  };
  animationItem!: AnimationItem;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onContinue(){
    this.router.navigateByUrl('facesnaps');
  }

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

}
