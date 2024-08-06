import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'component-card',
  standalone: true,
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
  ],
  template: `
    <div class="component-card">
      <ng-content></ng-content>
    </div>
  `,

    templateUrl: 'snackbar.html',
  styleUrls: ['../app.component.scss'],
})
export class Snackbar {

  constructor(private _snackBar: MatSnackBar) {
    
  }

  openSnackBar() {
    this._snackBar.open('This is an example of snackbar!', 'Dismiss', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
