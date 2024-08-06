import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, startWith, map } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'component-card',
  standalone: true,
  imports: [
    CommonModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
  ],
  template: `
    <div class="component-card">
      <ng-content></ng-content>
    </div>
  `,

  templateUrl: 'input.html',
  styleUrls: ['../app.component.scss'],
})
export class Input {
  myControl = new FormControl('');
  options: string[] = [
    'Acquired Material Source',
    'Acquisition Alias',
    'Batch',
    'Batch Pedigree',
    'Batch Type',
    'Biological Entity',
    'Biological Material Category',
    'Breeding Start Intent',
    'Business ID Alias',
    'CGENES',
    'Coding Decision Year',
    'Company Owner',
    'Comprehensive CGENES',
    'Concatenated Constructs',
    'Creation Country',
    'Creation Date',
    'Creation Location',
    'Creation Method',
    'Creation Operation',
    'Creation Operator',
    'Crop',
    'Early Stage Name',
    'Exceptions',
    'External Name',
    'FP:BE',
    'FP:Batch',
    'Female Parent Trial Id',
    'Generation Code',
    'Harvest Country',
    'Harvest Location',
    'Harvest Method',
    'Harvest State',
    'Hybrid Alias',
    'Hybrid Intent',
    'LifeCycle Count',
    'MP:BE',
    'MP:Batch',
    'Mat ID',
    'Non RD Owner',
    'Owner',
    'Pedigree Stem',
    'Population',
    'Production Batch Code',
    'Provider',
    'Stable Line Code',
    'Stable Line Indicator',
    'Stable Variety Code',
    'T0 Plant Id',
  ];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  checkOptionSelected() {
    const value = this.myControl.value;
    if (value && !this.options.includes(value)) {
      this.myControl.setValue('');
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
