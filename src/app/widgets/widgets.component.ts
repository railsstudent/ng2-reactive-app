import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets$: Observable<Widget[]>;
  selectedWidget: Widget;

  constructor(
    private widgetsService: WidgetsService
  ) {}

  ngOnInit() {
    this.widgets$ = this.widgetsService.widgets$;
    this.widgetsService.loadWidgets();
  }

  resetWidget() {
    let emptyWidget: Widget = {id: null, name: '', description: ''};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  deleteWidget(widget: Widget) {
    // this.widgets.forEach((w, index) => {
    //   if (w.id === widget.id) {
    //     this.widgets.splice(index, 1);
    //   }
    //});

    // Generally, we would want to wait for the result of `widgetsService.deleteWidget`
    // before resetting the current widget.
    this.resetWidget();
  }
}
