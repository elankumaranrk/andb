import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../page-animation';

@Component({
    host:{'[@transition]':'true',   'style': 'display: block;'},
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.css'],
  animations:[pageTransition]
})
export class HowToComponent implements OnInit {
  state: string = 'in';
  constructor() { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in')
  }

}
