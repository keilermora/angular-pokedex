import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { QueryParamsHandlingDirective } from '../../shared/directives/query-params-handling.directive';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [DialogBoxComponent, QueryParamsHandlingDirective, RouterLink, TranslateModule],
})
export class NotFoundComponent {
  constructor() {}
}
