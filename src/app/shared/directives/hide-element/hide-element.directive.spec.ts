import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HideElementDirective } from './hide-element.directive';
import { Component } from '@angular/core';

@Component({
  template: `<div appHideElement></div>`,
  standalone: true,
})
class HostComponent {}

describe('HideElementDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent, HideElementDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
