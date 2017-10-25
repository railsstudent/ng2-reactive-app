import { Item } from './item.model';

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_ITEMS = 'ADD_ITEMS';
export const CREATE_ITEM = 'CREATE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

const comparator = 'id';

const itemReducer: ActionReducer<Item[]> = (state: Item[] = [], action: Action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return action.payload;

    case CREATE_ITEM:
      return [...state, action.payload];

    case UPDATE_ITEM:
      const x = state.map(item => {
        return item[comparator] === action.payload[comparator] ? Object.assign({}, item, action.payload) : item;
      })
      console.log(x);
      return x;

    case DELETE_ITEM:
      return state.filter(item => {
        return item[comparator] !== action.payload[comparator];
      });

    default:
      return state;
  }
};

export function items(state: any, action: any) {
  return itemReducer(state, action);
}
