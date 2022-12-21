import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lvl1',
  templateUrl: './lvl1.component.html',
  styleUrls: ['./lvl1.component.css']
})
export class Lvl1Component implements OnInit {

  number = -1

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
        setTimeout(()=>{this.router.navigate(['/lvl-2'])},3500)

    }
    audio.load();
    audio.play();
  }
}
