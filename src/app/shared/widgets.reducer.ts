import { Widget } from './widget.model';

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_WIDGETS = 'ADD_WIDGETS';
export const CREATE_WIDGET = 'CREATE_WIDGET';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';

const initialState = [
  {
    'id': '1',
    'name': 'Widget 1',
    'description': 'This is a description',
    'user': 1
  },
  {
    'id': '2',
    'name': 'Widget 2',
    'description': 'This is a description',
    'user': 3
  },
  {
    'id': '3',
    'name': 'Widget 3',
    'description': 'This is a lovely widget edited again!',
    'user': 2
  }
];

const comparator = 'id';

const widgetReducer: ActionReducer<Widget[]> = (state: Widget[] = initialState, action: Action) => {
  switch (action.type) {
    case ADD_WIDGETS:
      return state;

    case CREATE_WIDGET:
      Object.freeze(state);
      return [...state, action.payload];

    case UPDATE_WIDGET:
      Object.freeze(state);
      return state.map(widget =>
        (widget[comparator] === action.payload[comparator]) ? Object.assign({}, widget, action.payload) : widget
      );

    case DELETE_WIDGET:
      Object.freeze(state);
      return state.filter(widget => widget[comparator] !== action.payload[comparator]);

    default:
      return state;
  }
}

export function widgets(state: any, action: any) {
    return widgetReducer(state, action);
};
