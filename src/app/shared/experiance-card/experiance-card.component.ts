import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-experiance-card',
    templateUrl: './experiance-card.component.html',
    styleUrls: ['./experiance-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ExperianceCardComponent {
  @Input() content: any;
}
