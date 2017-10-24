import { Widget } from './widget.model';
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_WIDGETS = 'ADD_WIDGETS';

export const widgets: ActionReducer<Widget[]> = (state: Widget[] = [], action: Action) => {
  switch(action.type) {
    case ADD_WIDGETS:
      return action.payload;
    default:
      return state;
  }
};
