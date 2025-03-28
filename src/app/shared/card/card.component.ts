import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class CardComponent {
  @Input() projectPreview: string | undefined;
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() stack: string | undefined;
  @Input() previewUrl: string | undefined;
  @Input() codewUrl: string | undefined;
}
