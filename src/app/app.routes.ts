import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    loadComponent: () =>
      import('./index/index').then(
        (c) => c.Index
      ),
      title: 'Components'
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./button/button').then(
        (c) => c.Button
      ),
      title: 'Button'
  },
  {
    path: 'toolbar',
    loadComponent: () =>
      import('./toolbar/toolbar').then(
        (c) => c.Toolbar
      ),
      title: 'Toolbar'
  },
  {
    path: 'badge',
    loadComponent: () =>
      import('./badge/badge').then(
        (c) => c.Badge
      ),
      title: 'Badge'
  },
  {
    path: 'input',
    loadComponent: () =>
      import('./input/input').then(
        (c) => c.Input
      ),
      title: 'Input'
  },
  {
    path: 'progress',
    loadComponent: () =>
      import('./progress/progress').then(
        (c) => c.Progress
      ),
      title: 'Progress'
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./menu/menu').then(
        (c) => c.Menu
      ),
      title: 'Menu'
  },
  {
    path: 'chip',
    loadComponent: () =>
      import('./chip/chip').then(
        (c) => c.Chip
      ),
      title: 'Chip'
  },
  {
    path: 'tooltip',
    loadComponent: () =>
      import('./tooltip/tooltip').then(
        (c) => c.Tooltip
      ),
      title: 'Tooltip'
  },
  {
    path: 'snackbar',
    loadComponent: () =>
      import('./snackbar/snackbar').then(
        (c) => c.Snackbar
      ),
      title: 'Snackbar'
  },
  {
    path: 'tab',
    loadComponent: () =>
      import('./tab/tab').then(
        (c) => c.Tab
      ),
      title: 'Tab'
  },
  {
    path: 'sidenav',
    loadComponent: () =>
      import('./sidenav/sidenav').then(
        (c) => c.Sidenav
      ),
      title: 'Sidenav'
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./table/table').then(
        (c) => c.Table
      ),
      title: 'Table'
  },];
