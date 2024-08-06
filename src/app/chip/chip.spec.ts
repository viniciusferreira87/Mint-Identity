import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chip } from './chip';

describe('Chip', () => {
  let component: Chip;
  let fixture: ComponentFixture<Chip>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Chip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
