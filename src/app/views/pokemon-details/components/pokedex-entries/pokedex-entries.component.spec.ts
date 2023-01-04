import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexEntriesComponent } from './pokedex-entries.component';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';

describe('PokedexEntriesComponent', () => {
  let component: PokedexEntriesComponent;
  let fixture: ComponentFixture<PokedexEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogBoxComponent, PokedexEntriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
