import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QueryParamsHandlingDirective } from './query-params-handling.directive';

@Component({
  template: `<a routerLink=""></a>`,
  standalone: true,
  imports: [RouterTestingModule],
})
class HostComponent {}

describe('QueryParamsHandlingDirective', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent, QueryParamsHandlingDirective, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
