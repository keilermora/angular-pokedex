import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';
import { QueryParamsHandlingDirective } from 'src/app/shared/directives/query-params-handling/query-params-handling.directive';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [DialogBoxComponent, QueryParamsHandlingDirective, RouterLink, TranslateModule],
})
export class AboutComponent {
  homeAngular = environment.homeAngular;
  homePokeApi = environment.homePokeApi;
  pokedexGithub = environment.pokedexGithub;
  keilerLinkedin = environment.keilerLinkedin;
}
