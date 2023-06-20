import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { QueryParamsHandlingDirective } from '../../shared/directives/query-params-handling.directive';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-internal-server-error',
  templateUrl: './internal-server-error.component.html',
  styleUrls: ['./internal-server-error.component.scss'],
  standalone: true,
  imports: [DialogBoxComponent, QueryParamsHandlingDirective, RouterLink, TranslateModule],
})
export class InternalServerErrorComponent {
  constructor(private router: Router) {}

  reload(): void {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
}
