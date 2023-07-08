import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgClass, NgStyle],
})
export class DialogBoxComponent {
  @Input() size: 'small' | 'large' = 'small';
  @Input() hoverable = false;
  @Input() backgroundStyles: any = {};
}
