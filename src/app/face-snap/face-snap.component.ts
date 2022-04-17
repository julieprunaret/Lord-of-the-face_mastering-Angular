import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  creationDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
      this.title = "Gandalf";
      this.description = "Un magicien aussi sympathique que puissant";
      this.creationDate = new Date();
      this.snaps = 6;
      this.imageUrl = "assets/gandalf.png"
  }

  onAddSnap(){
    this.snaps++;
  }
}
