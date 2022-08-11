import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonNamePipe } from 'src/app/shared/pipes/pokemon-name.pipe';
import { PokemonNumberPipe } from 'src/app/shared/pipes/pokemon-number.pipe';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonCardComponent, PokemonNamePipe, PokemonNumberPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
