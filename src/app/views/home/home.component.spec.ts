import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';
import { SearchResultsMessagePipe } from 'src/app/shared/pipes/search-results-message/search-results-message.pipe';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DialogBoxComponent,
        HomeComponent,
        PokemonCardComponent,
        PokemonListComponent,
        SearchResultsMessagePipe,
        SidenavComponent,
        StatusBarComponent,
      ],
      imports: [ApolloTestingModule, FontAwesomeTestingModule, FormsModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
