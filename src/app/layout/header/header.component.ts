import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isDarkMode: boolean = false;

  darkMode () {
    this.isDarkMode = !this.isDarkMode;
  }
}
