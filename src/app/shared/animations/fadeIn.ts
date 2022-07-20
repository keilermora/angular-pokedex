import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

const fadeIn: AnimationTriggerMetadata = trigger('fadeIn', [
  transition(':enter', [style({ opacity: 0 }), animate(250, style({ opacity: 1 }))]),
]);

export default fadeIn;
