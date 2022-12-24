import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lvl5',
  templateUrl: './lvl5.component.html',
  styleUrls: ['./lvl5.component.css']
})
export class Lvl5Component implements OnInit {

  private number: number = -1;

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
          this.router.navigate(['/puzzle'])
        }, 3500)

    }
    audio.load();
    audio.play();
  }
}
