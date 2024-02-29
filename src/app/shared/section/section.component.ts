import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  @Input() title: string | undefined;
  @Input() id: string | undefined;
  @Input() wrapper: boolean = false;
  @Input() text: string | undefined;
  @Input() iconsList: Array<any> | undefined;
  // @Input() projectList: Array<any> | undefined;
  @Input() projectList: boolean = false;
  @Input() btnTitle: string | undefined;

  Arr = Array;
  num: number = 6;
}
