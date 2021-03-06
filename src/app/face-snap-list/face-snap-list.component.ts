import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { NewsListComponent } from '../news-list/news-list.component';


@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  constructor(
    private faceSnapsService: FaceSnapsService
  ) { }

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getAllFaceSnaps(); // on récupère la méthode de face-snap.service pour accéder aux données. Les faceSnaps sont donc ce qui est récupérer dans la méthode getAllFaceSnaps de FaceSnapsService.
  }

}
