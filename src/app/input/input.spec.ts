import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input } from './input';

describe('Input', () => {
  let component: Input;
  let fixture: ComponentFixture<Input>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Input);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
