import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      // Scrollear al top sólo si el cambio de ruta no incluye query params.
      if(!/\?/.test(evt.url)) {
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);
      }
  });
  }
}
