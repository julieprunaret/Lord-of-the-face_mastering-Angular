import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mySnap1!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit(){
    this.mySnap1 = new FaceSnap(
      "Gandalf",
      "Un magicien aussi sympathique que puissant",
      "assets/gandalf.png",
      new Date(),
      0
    ),
    this.mySnap2 = new FaceSnap(
      "Sam",
      "Le véritable héro du Seigneur des Anneaux",
      "assets/sam.png",
      new Date(),
      0
    ),
    this.mySnap3 = new FaceSnap(
      "Gollum",
      "un personnage \"2 en 1\"",
      "assets/gollum.png",
      new Date(),
      0
    )

  }
}
