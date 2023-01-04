import { TestBed } from '@angular/core/testing';
import { HideElementDirective } from './hide-element.directive';
import { ElementRef } from '@angular/core';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('HideElementDirective', () => {
  it('should create an instance', () => {
    const mockElement = new MockElementRef();
    const directive = new HideElementDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
