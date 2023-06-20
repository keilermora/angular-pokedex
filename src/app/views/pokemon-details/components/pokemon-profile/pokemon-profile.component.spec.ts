import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProfileComponent } from './pokemon-profile.component';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';

describe('PokemonProfileComponent', () => {
  let component: PokemonProfileComponent;
  let fixture: ComponentFixture<PokemonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogBoxComponent, PokemonProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
