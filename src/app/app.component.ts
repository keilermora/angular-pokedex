import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Event, Router, Scroll, RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private swUpdate: SwUpdate,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.checkPWAUpdate();
    this.setScrollBehaviour();
  }

  private checkPWAUpdate() {
    if (!this.swUpdate.isEnabled) return;

    this.swUpdate.checkForUpdate().then((hasUpdate) => {
      if (hasUpdate) {
        this.swUpdate.activateUpdate().then(() => {
          location.reload();
        });
      }
    });
  }

  private setScrollBehaviour() {
    this.router.events
      .pipe(filter((e: Event): e is Scroll => e instanceof Scroll))
      .subscribe((e: Scroll) => {
        if (e.position) {
          // Backward navigation
          this.viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          // Anchor navigation
          this.viewportScroller.scrollToAnchor(e.anchor);
        } else if (!/\?/.test(e.routerEvent.url)) {
          // Forward navigation
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
