import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
