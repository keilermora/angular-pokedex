import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {}

  scrollToContent() {
    this.viewportScroller.scrollToAnchor('home__content');
  }
}
