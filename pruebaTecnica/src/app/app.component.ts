import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .router-outlet-container {
      box-sizing: border-box;
      font-family: 'Open Sans', sans-serif;
      margin: 0;
      padding: 0;
    }
  `]
})
export class AppComponent {
  title = 'pruebaTecnica';
}
