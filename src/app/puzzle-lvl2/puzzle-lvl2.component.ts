import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puzzle-lvl2',
  templateUrl: './puzzle-lvl2.component.html',
  styleUrls: ['./puzzle-lvl2.component.css'],
})
export class PuzzleLvl2Component implements OnInit {
  number: number = -1;
  i = 9;
  image1 = false;
  image2 = false;
  image3 = false;
  image4 = false;
  image5 = false;
  image6 = false;
  image7 = false;
  image8 = false;
  image9 = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onAnswer(number: number) {
    this.number = number;
    let audio = new Audio();
    switch (this.number) {
      case 1:
        if (this.i == 1) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image1 = true;
          this.i = 9;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        // setTimeout(() => {
        //   this.router.navigate(['/play']);
        // }, 3500);
        break;

      case 2:
        if (this.i == 2) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image2 = true;
          this.i--;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        break;

      case 3:
        if (this.i == 3) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image3 = true;
          this.i--;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        break;
      case 4:
        if (this.i == 4) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image4 = true;
          this.i--;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }

        break;
      case 5:
        if (this.i == 5) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image5 = true;
          this.i--;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        break;
      case 6:
        if (this.i == 6) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image6 = true;
          this.i--;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        break;
      case 7:
        if (this.i == 7) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image7 = true;
          this.i--;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        break;
      case 8:
        if (this.i == 8) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image8 = true;
          this.i--;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        break;
      case 9:
        if (this.i == 9) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image9 = true;
          this.i--;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        break;
    }

    audio.load();
    audio.play();
  }
}
