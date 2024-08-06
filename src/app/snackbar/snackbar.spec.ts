import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snackbar } from './snackbar';

describe('Snackbar', () => {
  let component: Snackbar;
  let fixture: ComponentFixture<Snackbar>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Snackbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
