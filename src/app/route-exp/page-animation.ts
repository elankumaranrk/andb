import { trigger, state, style, transition, animate, group } from '@angular/core';

export const pageTransition =
    trigger('transition', [
        state('in', style({ transform: '', opacity: '1' })),
        transition('void => *', [
            style({transform: 'translateY(100%)' , opacity:'0'}),
            animate('0.5s 500ms ease-in')
        ]),
         transition('* => void', [
           animate('500ms ease-out', style({transform: 'translateY(100%)', opacity:'0'}))
        ])
    ]);