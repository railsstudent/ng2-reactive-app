import { Item } from './item.model';
import { Widget } from './widget.model';

export interface UserData {
  name: string;
  items: Item[];
  widgets: Widget[]
}
