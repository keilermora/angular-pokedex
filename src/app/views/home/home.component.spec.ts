import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        DialogBoxComponent,
        HomeComponent,
        PokemonCardComponent,
        PokemonListComponent,
        SearchResultsMessagePipe,
        SidenavComponent,
        StatusBarComponent,
      ],
      imports: [ApolloTestingModule, RouterTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
