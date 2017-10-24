import { Widget } from './widget.model';
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_WIDGETS = 'ADD_WIDGETS';

const widgetReducer: ActionReducer<Widget[]> = (state: Widget[] = [], action: Action) => {
  switch(action.type) {
    case ADD_WIDGETS:
      return action.payload;
    default:
      return state;
  }
}

export function widgets(state: any, action: any) {
  return widgetReducer(state, action);
}
