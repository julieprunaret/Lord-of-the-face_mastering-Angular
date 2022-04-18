import { Component, OnInit, Input  } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  buttonText!:string;

  constructor(
    private FaceSnapsService: FaceSnapsService
  ) { }

  ngOnInit(): void {
      this.buttonText= "Like";
  }

  onSnap(){
      if(this.buttonText === "Like") {
        this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id);
        this.buttonText= "Dislike";
      } else {
        this.buttonText= "Like";
        this.faceSnap.snaps--;
    } 
  }

}