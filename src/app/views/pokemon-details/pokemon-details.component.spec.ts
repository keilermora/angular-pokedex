import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { BattleStatsComponent } from './components/battle-stats/battle-stats.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PokedexEntriesComponent } from './components/pokedex-entries/pokedex-entries.component';
import { PokemonProfileComponent } from './components/pokemon-profile/pokemon-profile.component';
import { PokemonHeightPipe } from 'src/app/shared/pipes/pokemon-height/pokemon-height.pipe';
import { PokemonNamePipe } from 'src/app/shared/pipes/pokemon-name/pokemon-name.pipe';
import { PokemonNumberPipe } from 'src/app/shared/pipes/pokemon-number/pokemon-number.pipe';
import { PokemonWeightPipe } from 'src/app/shared/pipes/pokemon-weight/pokemon-weight.pipe';

import { PokemonDetailsComponent } from './pokemon-details.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
        BattleStatsComponent,
        BreadcrumbComponent,
        BrowserAnimationsModule,
        DialogBoxComponent,
        PaginatorComponent,
        PokedexEntriesComponent,
        PokemonDetailsComponent,
        PokemonHeightPipe,
        PokemonNamePipe,
        PokemonNumberPipe,
        PokemonProfileComponent,
        PokemonWeightPipe,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
