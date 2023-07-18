import { Component, HostListener, OnInit } from '@angular/core';
import { HEADER, DARK_NODE_BTN } from 'src/app/common/mocks/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mock = HEADER;
  btnGroup = DARK_NODE_BTN;
  isDarkMode: boolean = false;
  unpined: boolean = false;

  startScroll: number = 0;

  ngOnInit(): void {
    this.checkUserPreferences();
  }

  checkUserPreferences() {
    window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.isDarkMode = true;
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      this.isDarkMode = false;
    }
  }

  themeSwicher() {
    this.isDarkMode = !this.isDarkMode;
    this.isDarkMode ?
      document.documentElement.setAttribute('data-theme', 'dark') :
      document.documentElement.setAttribute('data-theme', 'light');
  }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > this.startScroll) {
      this.unpined = true;
      this.startScroll = window.scrollY;
    } else if (window.scrollY < this.startScroll) {
      this.unpined = false;
      this.startScroll = window.scrollY;
    }
  }


}
