import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root' //ce service est enregistré à la RACINE de l'application
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [ //notre service contient un tableau de faceSnaps
        {
          id: 1,
          title: "Gandalf",
          description: "Un magicien aussi sympathique que puissant",
          imageUrl: "assets/gandalf.jpg",
          creationDate: new Date(),
          snaps: 12,
          location: "Fondcombe",
        },
        {
          id: 2,
          title: "Sam",
          description: "Le véritable héro du Seigneur des Anneaux",
          imageUrl: "assets/sam.jpg",
          creationDate: new Date(),
          snaps: 130
        },
        {
          id: 3,
          title: "Gollum",
          description: "un personnage \"2 en 1\"",
          imageUrl: "assets/gollum.webp",
          creationDate: new Date(),
          snaps: 0,
          location: "Mordor",
        }
      ];

      getAllFaceSnaps(): FaceSnap[] { //on récupère un tableau de type faceSnaps
        return this.faceSnaps; // permet dans le contexte d'un serveur de récupérer les données
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId); // on cherche un faceSnap par son id dans le tableau faceSnaps avec la fonction find()
        if(!faceSnap) {
          throw new Error('FaceSnap not found !');
        } else {
          return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'Like' | 'Dislike'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId); // on cherche un faceSnap par son id dans le tableau faceSnaps avec la fonction find()
        snapType === 'Like' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
}