import { Component } from '@angular/core';
import { TECH_STACK } from 'src/app/common/mocks/tech-stack';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent {
  techStack = TECH_STACK
}
