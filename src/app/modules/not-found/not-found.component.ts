import { Component, OnInit } from '@angular/core';
import Pokedex from '@data/types/pokedex';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  pokedex: Pokedex = {} as Pokedex;

  constructor() {}

  ngOnInit() {}
}
