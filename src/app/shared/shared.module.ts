import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ExperianceCardComponent } from './experiance-card/experiance-card.component';
import { SectionComponent } from './section/section.component';


@NgModule({
  declarations: [
    CardComponent,
    ExperianceCardComponent,
    SectionComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ExperianceCardComponent,
    SectionComponent
  ],
})
export class SharedModule { }
