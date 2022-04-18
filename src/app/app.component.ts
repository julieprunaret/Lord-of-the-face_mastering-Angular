import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  faceSnaps!: FaceSnap[];

  ngOnInit(){
    this.faceSnaps = [
    {
      title: "Gandalf",
      description: "Un magicien aussi sympathique que puissant",
      imageUrl: "assets/gandalf.png",
      creationDate: new Date(),
      snaps: 0,
      location: "Fondcombe",
    },
    {
      title: "Sam",
      description: "Le véritable héro du Seigneur des Anneaux",
      imageUrl: "assets/sam.png",
      creationDate: new Date(),
      snaps: 0
    },
    {
      title: "Gollum",
      description: "un personnage \"2 en 1\"",
      imageUrl: "assets/gollum.png",
      creationDate: new Date(),
      snaps: 0,
      location: "Mordor",
    }
  ]
  }
}
