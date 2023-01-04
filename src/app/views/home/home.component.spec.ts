import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { I18nKeyPipe } from 'src/app/shared/pipes/i18n-key/i18n-key.pipe';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DialogBoxComponent,
        HomeComponent,
        I18nKeyPipe,
        PokemonCardComponent,
        PokemonListComponent,
        SidebarComponent,
        StatusBarComponent,
      ],
      imports: [
        ApolloTestingModule,
        FontAwesomeTestingModule,
        FormsModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
