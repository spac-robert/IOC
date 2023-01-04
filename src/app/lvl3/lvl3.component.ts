import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lvl3',
  templateUrl: './lvl3.component.html',
  styleUrls: ['./lvl3.component.css']
})
export class Lvl3Component implements OnInit {

   number: number = -1;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onAnswer(number: number) {
    this.number = number;
    let audio = new Audio();
    switch (this.number) {
      case 1:
        audio.src = '../assets/sounds/siu.mp3'
        setTimeout(() => {
          this.router.navigate(['/lvl-4'])
        }, 3500)

    }
    audio.load();
    audio.play();
  }

}
