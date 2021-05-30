import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  ngDoCheck() {
    document.body.setAttribute('color-theme',localStorage.getItem('theme'))
  }
}
