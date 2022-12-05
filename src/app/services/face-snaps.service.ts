import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {

    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 200,
          location: 'Paris'
        },
        {
          id: 2,
          title: 'Venise',
          description: 'Canal de Venise',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/11/08/20/20/building-7579247_960_720.jpg',
          createdDate: new Date(),
          snaps: 20,
          location: 'Venise'
        },
        {
          id: 3,
          title: 'Chat',
          description: 'Un chat qui dort',
          imageUrl: 'https://cdn.pixabay.com/photo/2022/10/19/22/15/cat-7533717_960_720.jpg',
          createdDate: new Date(),
          snaps:6
        }
      ];

      getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
      }

      snapFaceSnapByID(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap=> faceSnap.id === faceSnapId);
        if (faceSnap){
          return faceSnap;
        } else {
          throw new Error('FaceSnap not found!');
        }
      }

      addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
        const faceSnap: FaceSnap = {
            ...formValue,
            snaps: 0,
            createdDate: new Date(),
            id: this.getNewId()
        };
        this.faceSnaps.push(faceSnap);
    }

      getNewId(){
        return this.faceSnaps[this.faceSnaps.length-1].id + 1;
      }
}