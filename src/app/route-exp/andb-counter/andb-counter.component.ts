import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'andb-counter',
  templateUrl: './andb-counter.component.html',
  styleUrls: ['./andb-counter.component.scss']
})
export class AndbCounterComponent implements OnInit {

  @ViewChild('myCanvas') canvasRef: ElementRef;
  total: number = 30;
  count: number = 22;
  offset:number = 0;
  constructor() { }

  ngOnInit() {
 
  }

}
