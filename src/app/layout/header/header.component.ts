import { Component } from '@angular/core';
import { HEADER, DARK_NODE_BTN  } from 'src/app/common/mocks/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mock = HEADER;
  btnGroup = DARK_NODE_BTN;
  isDarkMode: boolean = false;

  darkMode () {
    this.isDarkMode = !this.isDarkMode;
  }
}
