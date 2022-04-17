import { Component, OnInit, Input  } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  creationDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!:string;

  ngOnInit(): void {
      this.title = "Gandalf";
      this.description = "Un magicien aussi sympathique que puissant";
      this.creationDate = new Date();
      this.snaps = 6;
      this.imageUrl = "assets/gandalf.png"
      this.buttonText= "Like";
  }

  onSnap(){
      if(this.buttonText === "Like") {
        this.snaps++;
        this.buttonText= "Dislike";
      } else {
        this.buttonText= "Like";
        this.snaps--;
    }
  }

}