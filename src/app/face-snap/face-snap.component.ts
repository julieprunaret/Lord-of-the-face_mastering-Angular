import { Component, OnInit, Input  } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  buttonStyle!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}