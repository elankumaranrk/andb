import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteExpRoutingModule } from './route-exp-routing.module';
import { RouteExpComponent } from './route-exp.component';
import { HowToComponent } from './how-to/how-to.component';
import { ExamplesComponent } from './examples/examples.component';

import { ChartsModule } from 'ng2-charts';
import { BaseChartDemoComponent } from './base-chart-demo/base-chart-demo.component';
import { AndbCounterComponent } from './andb-counter/andb-counter.component';
import { Counto } from './counto.directive';

@NgModule({
  imports: [
    CommonModule,
    RouteExpRoutingModule,
    ChartsModule
  ],
  declarations: [RouteExpComponent, HowToComponent, ExamplesComponent, BaseChartDemoComponent, AndbCounterComponent, Counto],
  exports:[RouteExpComponent]
})
export class RouteExpModule { }
