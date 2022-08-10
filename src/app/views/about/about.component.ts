import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  homeAngular: string = environment.homeAngular;
  homePokeApi: string = environment.homePokeApi;
  pokedexGithub: string = environment.pokedexGithub;
  keilerLinkedin: string = environment.keilerLinkedin;

  constructor() {}
}
