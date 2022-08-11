import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Apollo } from 'apollo-angular';
import { PokedexVersionNamePipe } from 'src/app/shared/pipes/pokedex-version-name.pipe';
import { PokemonHeightPipe } from 'src/app/shared/pipes/pokemon-height.pipe';
import { PokemonNamePipe } from 'src/app/shared/pipes/pokemon-name.pipe';
import { PokemonNumberPipe } from 'src/app/shared/pipes/pokemon-number.pipe';
import { PokemonStatPipe } from 'src/app/shared/pipes/pokemon-stat.pipe';
import { PokemonTypePipe } from 'src/app/shared/pipes/pokemon-type.pipe';
import { PokemonWeightPipe } from 'src/app/shared/pipes/pokemon-weight.pipe';

import { PokemonDetailsComponent } from './pokemon-details.component';

describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        PokedexVersionNamePipe,
        PokemonDetailsComponent,
        PokemonHeightPipe,
        PokemonNamePipe,
        PokemonNumberPipe,
        PokemonStatPipe,
        PokemonTypePipe,
        PokemonWeightPipe,
      ],
      imports: [BrowserAnimationsModule, RouterTestingModule],
      providers: [Apollo],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
