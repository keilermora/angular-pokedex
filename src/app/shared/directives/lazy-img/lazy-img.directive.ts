import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appLazyImg]',
  standalone: true,
})
export class LazyImgDirective implements OnInit {
  private el = inject(ElementRef<HTMLImageElement>);

  ngOnInit() {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      this.el.nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
