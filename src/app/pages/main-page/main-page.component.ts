import { Component } from '@angular/core';
import { MAIN_PAGE } from '../../common/mocks/main-page';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  mainpage = MAIN_PAGE;
}
