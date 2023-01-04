import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHideElement]',
})
export class HideElementDirective implements OnChanges {
  @Input() appHideElement: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.visibility = this.appHideElement ? 'hidden' : 'visible';
  }
}
