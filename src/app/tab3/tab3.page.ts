import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  toggleTheme(event:any) {
    if(localStorage.getItem('theme') === "light") {
      localStorage.setItem('theme','dark')
      
    } else if (localStorage.getItem('theme') === "dark") {
      localStorage.setItem('theme','light')
    }
  }
}
