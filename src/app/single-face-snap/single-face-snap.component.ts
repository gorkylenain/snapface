import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {

  faceSnap!: FaceSnap;
  buttonText! : string;

  constructor(private faceSnapService: FaceSnapService, private activatedRoute: ActivatedRoute){ }

  ngOnInit(){
    this.buttonText = "Oh Snap!";
    const faceSnapId = +this.activatedRoute.snapshot.params['id']; // + permet de transformer un string en number
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!'){
      this.faceSnapService.snapFaceSnapByID(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapService.snapFaceSnapByID(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }

  }
}
