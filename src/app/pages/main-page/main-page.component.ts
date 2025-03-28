import { Component } from '@angular/core';
import { MAIN_PAGE } from '../../common/mocks/main-page';
import { TECH_STACK } from 'src/app/common/mocks/tech-stack';
import { PROJECTS } from 'src/app/common/mocks/projects';
import { SectionComponent } from '../../shared/section/section.component';
import { AboutMePageComponent } from '../about-me-page/about-me-page.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    standalone: true,
    imports: [SectionComponent, AboutMePageComponent]
})
export class MainPageComponent {
  mainpage = MAIN_PAGE;
  techStack = TECH_STACK;
  project = PROJECTS;
}
