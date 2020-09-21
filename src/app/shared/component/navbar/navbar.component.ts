import { Component, OnInit } from '@angular/core';
import { environment } from '@env';
import { faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  iconGithub: IconDefinition = faGithub;
  iconLinkedin: IconDefinition = faLinkedin;

  keilerLinkedin: string = environment.keilerLinkedin;
  pokedexGithub: string = environment.pokedexGithub;

  constructor() { }

  ngOnInit() {
  }

}
