import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

const fadeInOut: AnimationTriggerMetadata = trigger('fadeInOut', [
  transition(':enter', [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))]),
  transition(':leave', [animate(500, style({ opacity: 0 }))]),
]);

export default fadeInOut;
