import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Layout],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})



export class AppComponent  {
  title = 'identity-theme';
}


