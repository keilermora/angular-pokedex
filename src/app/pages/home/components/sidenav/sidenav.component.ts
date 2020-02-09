import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showNav: boolean;
  faBars = faBars;
  faTimes = faTimes;

  constructor() { }

  ngOnInit() {
    this.showNav = false;
  }

  toggleNav(): void {
    this.showNav = !this.showNav;
    console.log(this.showNav)
  }
}
