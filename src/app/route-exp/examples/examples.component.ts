import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { pageTransition } from '../page-animation';

@Component({
  host:{'[@transition]':'true',   'style': 'display: block;'},
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
  animations:[pageTransition]
})
export class ExamplesComponent implements OnInit {

  state: string = 'in';
  constructor(public changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.state = (this.state === 'in' ? 'out' : 'in');
    this.changeDetectorRef.detectChanges();;
  }

}
