import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';

import { PokedexEntriesComponent } from './pokedex-entries.component';

describe('PokedexEntriesComponent', () => {
  let component: PokedexEntriesComponent;
  let fixture: ComponentFixture<PokedexEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogBoxComponent, PokedexEntriesComponent],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
