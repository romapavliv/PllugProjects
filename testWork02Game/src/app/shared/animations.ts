import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const rotateCard = [
    trigger('rotateCard', [
    state('start', style({
      transform: 'rotateY(0deg) scale(1)'
    })),
    state('rotate', style({
      transform: 'rotateY(180deg) scale(1)',
    })),
    state('invalid', style({
      boxShadow:"none",
      transform: 'rotateY(0deg)',
      background:'rgba(73, 73, 73, 0)'
    })),

    transition('start => rotate', [
      animate(600, keyframes([
      style({transform: 'rotateY(0deg) scale(1)', offset: 0 }),
      style({transform: 'rotateY(90deg) scale(1.15)', offset: 0.5 }),
      style({transform: 'rotateY(180deg) scale(1)', offset: 1 }),
    ])),
    ]),
    transition('rotate => start', [
      animate(600, keyframes([
      style({transform: 'rotateY(180deg) scale(1)', offset: 0 }),
      style({transform: 'rotateY(90deg) scale(1.15)', offset: 0.5 }),
      style({transform: 'rotateY(0deg) scale(1)', offset: 1 }),
    ])),
    ]),
      transition('* => invalid', animate(600, keyframes([
      style({ transition:' rotateY(0deg)', offset: .2 }),
    ]))),
  ]),
  ]
