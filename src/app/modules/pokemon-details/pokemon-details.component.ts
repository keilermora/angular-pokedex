import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  id: number | null = null;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.route && this.route.snapshot && this.route.snapshot.paramMap) {
      let routeParamId = this.route.snapshot.paramMap.get('id') || '';
      this.id = parseInt(routeParamId);
    }
  }

}
