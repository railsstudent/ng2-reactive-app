import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Widget } from './widget.model';
import { Store } from '@ngrx/store';
import { AppStore } from '../app-store';
import { Http } from '@angular/http';
import { ADD_WIDGETS } from './widgets.reducer';

const BASE_URL = 'http://localhost:3000/widgets/';

@Injectable()
export class WidgetsService {
  widgets$: Observable<Widget[]> = this.store.select('widgets');

  constructor(
    private http: Http,
    private store: Store<AppStore>
  ) {}
  
  loadWidgets() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .map(payload => ({ type: ADD_WIDGETS, payload }))
      .subscribe(action => this.store.dispatch(action));
  }
}
