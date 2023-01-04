import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';
import { PokedexVersionNamePipe } from 'src/app/shared/pipes/pokedex-version-name/pokedex-version-name.pipe';
import { PokemonHeightPipe } from 'src/app/shared/pipes/pokemon-height/pokemon-height.pipe';
import { PokemonNamePipe } from 'src/app/shared/pipes/pokemon-name/pokemon-name.pipe';
import { PokemonNumberPipe } from 'src/app/shared/pipes/pokemon-number/pokemon-number.pipe';
import { PokemonStatPipe } from 'src/app/shared/pipes/pokemon-stat/pokemon-stat.pipe';
import { PokemonTypePipe } from 'src/app/shared/pipes/pokemon-type/pokemon-type.pipe';
import { PokemonWeightPipe } from 'src/app/shared/pipes/pokemon-weight/pokemon-weight.pipe';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { PokedexEntriesComponent } from './components/pokedex-entries/pokedex-entries.component';
import { PokemonProfileComponent } from './components/pokemon-profile/pokemon-profile.component';
import { BattleStatsComponent } from './components/battle-stats/battle-stats.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DialogBoxComponent,
        PokedexVersionNamePipe,
        PokemonDetailsComponent,
        PokemonHeightPipe,
        PokemonNamePipe,
        PokemonNumberPipe,
        PokemonStatPipe,
        PokemonTypePipe,
        PokemonWeightPipe,

        PaginatorComponent,
        PokedexEntriesComponent,
        PokemonProfileComponent,
        BattleStatsComponent,
        BreadcrumbComponent,
      ],
      imports: [ApolloTestingModule, BrowserAnimationsModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
