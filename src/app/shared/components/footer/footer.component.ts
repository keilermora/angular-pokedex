import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  currentYear: number;

  constructor() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }
}
