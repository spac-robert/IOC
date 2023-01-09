import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css'],
})
export class PuzzleComponent implements OnInit {
  number: number = -1;
  i = 1;
  image1 = false;
  image2 = false;
  image3 = false;
  image4 = false;

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
          this.i++;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        break;

      case 2:
        if (this.i == 2) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image2 = true;
          this.i++;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        break;

      case 3:
        if (this.i == 3) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image3 = true;
          this.i++;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }
        break;
      case 4:
        if (this.i == 4) {
          audio.src = '../assets/sounds/siu.mp3';
          this.image4 = true;
          this.i = 0;
        } else {
          audio.src = '../assets/sounds/siu.mp3';
        }

        setTimeout(() => {
          this.router.navigate(['/puzzle-lvl2']);
        }, 3500);
    }

    audio.load();
    audio.play();
  }
}
