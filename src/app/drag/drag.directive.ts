import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @Input()
  drag: any;

  constructor() {
  }

}
