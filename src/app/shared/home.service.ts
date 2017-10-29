import { Injectable } from '@angular/core';
import { WidgetsService } from './widgets.service';
import { UsersService } from './users.service';
import { ItemsService } from './items.service';
import { Observable } from 'rxjs/Observable';

import { Item } from './item.model';
import { User } from './user.model';
import { Widget } from './widget.model';
import { UserData } from './home.model';

@Injectable()
export class HomeService {
  users$: Observable<User[]>;
  items$: Observable<Item[]>;
  widgets$: Observable<Widget[]>;
  data$: Observable<UserData[]>;

  constructor(private itemsService: ItemsService,
    private usersService: UsersService,
    private widgetsService: WidgetsService) {

      this.users$ = this.usersService.users$;
      this.items$ = this.itemsService.items$;
      this.widgets$ = this.widgetsService.widgets$;
      this.data$ = Observable.combineLatest(this.users$, this.items$, this.widgets$,
        (users, items, widgets) => {
          return users.map(user => {
            return Object.assign({}, { name: user.name },
              {
                items: items.filter(item => item.user == user.id)
              },
              {
                widgets: widgets.filter(widget => widget.user == user.id)
              });
          });
        });

      this.itemsService.loadItems();
      this.usersService.loadUsers();
      this.widgetsService.loadWidgets();
    }

}
