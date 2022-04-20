import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  buttonText!: string;
  buttonStyle!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.buttonText = "Like";
      this.buttonStyle = "simple-button";
      const faceSnapId = +this.route.snapshot.params['id']; 
      //le +avant permet de transformer en type number
      this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
      //les paramètres sont de types string car ils vont être des éléments de l'url
  }

  onSnap() {
      if(this.buttonText === "Like") {
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'Like');
        this.buttonText= "Dislike";
        this.buttonStyle= "active-button";
      } else {
        this.buttonText= "Like";
        this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'Dislike');
        this.buttonStyle= "simple-button";
    } 
  }

  onBack(){
    this.router.navigateByUrl('/facesnaps');
  }

}
