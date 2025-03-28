import { Component } from '@angular/core';
import { ABOUT_ME, EXPERIANCE, EDUCATION } from 'src/app/common/mocks/about-me-page';
import { NgFor } from '@angular/common';
import { ExperianceCardComponent } from '../../shared/experiance-card/experiance-card.component';

@Component({
    selector: 'app-about-me-page',
    templateUrl: './about-me-page.component.html',
    styleUrls: ['./about-me-page.component.scss'],
    standalone: true,
    imports: [NgFor, ExperianceCardComponent]
})
export class AboutMePageComponent {
  mock = ABOUT_ME;
  exp = EXPERIANCE;
  ed = EDUCATION;
}
