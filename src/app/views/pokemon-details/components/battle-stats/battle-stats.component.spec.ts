import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleStatsComponent } from './battle-stats.component';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';

describe('BattleStatsComponent', () => {
  let component: BattleStatsComponent;
  let fixture: ComponentFixture<BattleStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BattleStatsComponent, DialogBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BattleStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
