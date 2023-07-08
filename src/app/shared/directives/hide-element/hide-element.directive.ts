import { Directive, ElementRef, Input, OnChanges, inject } from '@angular/core';

@Directive({
  selector: '[appHideElement]',
  standalone: true,
})
export class HideElementDirective implements OnChanges {
  @Input() appHideElement: boolean = false;

  private el = inject(ElementRef);

  ngOnChanges() {
    this.el.nativeElement.style.visibility = this.appHideElement ? 'hidden' : 'visible';
  }
}
