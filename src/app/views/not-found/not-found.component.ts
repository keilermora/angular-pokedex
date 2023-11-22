import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { QueryParamsHandlingDirective } from 'src/app/shared/directives/query-params-handling/query-params-handling.directive';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [
    DialogBoxComponent,
    QueryParamsHandlingDirective,
    NgOptimizedImage,
    RouterLink,
    TranslateModule,
  ],
})
export class NotFoundComponent {}
