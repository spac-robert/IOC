import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lvl2',
  templateUrl: './lvl2.component.html',
  styleUrls: ['./lvl2.component.css']
})
export class Lvl2Component implements OnInit {
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
          this.router.navigate(['/lvl-3'])
        }, 3500)

    }
    audio.load();
    audio.play();
  }
}
