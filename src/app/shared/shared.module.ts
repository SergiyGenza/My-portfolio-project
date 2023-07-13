import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ExperianceCardComponent } from './experiance-card/experiance-card.component';



@NgModule({
  declarations: [
    CardComponent,
    ExperianceCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ExperianceCardComponent
  ],
})
export class SharedModule { }
