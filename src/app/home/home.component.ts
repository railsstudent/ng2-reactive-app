import { Component, ViewEncapsulation } from '@angular/core';
import { UserData, HomeService } from '../shared';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  data$: Observable<UserData[]> = this.homeService.data$;

  constructor(
    private homeService: HomeService
  ) {}
}
