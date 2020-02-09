import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  showNav: boolean;
  faBars = faBars;

  constructor() { }

  ngOnInit() {
    this.showNav = false;
  }

  toggleNav(): void {
    this.showNav = !this.showNav;
    console.log(this.showNav)
  }
}
