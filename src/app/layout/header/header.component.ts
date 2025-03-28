import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';
import { HEADER, DARK_MODE_BTN } from 'src/app/common/mocks/header';
import { ThemeService } from 'src/app/services/theme.service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [NgClass, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  mock = HEADER;
  btnGroup = DARK_MODE_BTN;

  unpined: boolean = false;
  startScroll: number = 0;
  isDarkMode!: boolean;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.checkUserPreferences();
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

  public onThemeChange() {
    this.isDarkMode = this.themeService.changeTheme(this.isDarkMode);
  }

  private checkUserPreferences() {
    this.themeService.checkUserPreferences().subscribe(
      theme => this.isDarkMode = theme
    )
  }

}
