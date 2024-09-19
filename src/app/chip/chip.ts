import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'component-card',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    CdkDropList, 
    CdkDrag
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="component-card">
      <ng-content></ng-content>
    </div>
  `,

    templateUrl: 'chip.html',
  styleUrls: ['../app.component.scss'],
})

export class Chip {
  readonly vegetables = signal<Vegetable[]>([
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ]);

  drop(event: CdkDragDrop<Vegetable[]>) {
    this.vegetables.update(vegetables => {
      moveItemInArray(vegetables, event.previousIndex, event.currentIndex);
      return [...vegetables];
    });
  }}
