import { Component, OnInit } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  homeAngular: string = environment.homeAngular;
  homePokeApi: string = environment.homePokeApi;
  pokedexGithub: string = environment.pokedexGithub;
  keilerLinkedin: string = environment.keilerLinkedin;

  constructor() {}

  ngOnInit(): void {}
}
