import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogBoxComponent implements OnInit {
  @Input() size: 'small' | 'large' = 'small';
  @Input() hoverable: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
