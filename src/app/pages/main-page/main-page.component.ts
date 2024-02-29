import { Component } from '@angular/core';
import { MAIN_PAGE } from '../../common/mocks/main-page';
import { TECH_STACK } from 'src/app/common/mocks/tech-stack';
import { PROJECTS } from 'src/app/common/mocks/projects';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  mainpage = MAIN_PAGE;
  techStack = TECH_STACK;
  project = PROJECTS;
}
