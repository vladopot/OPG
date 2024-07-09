import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { advantages_array } from './texts';
import { SwipeDirective } from '../directives/swipe.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SwipeDirective
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public advantages = advantages_array;
  public position = 0;
  private isChanging = false;

  constructor() {}

  changeCard(event: MouseEvent) {
    if (!this.isChanging) {
      const elem = event.target;
      if (elem instanceof HTMLElement) {
        const num = Number(elem.innerHTML.slice(1));
        if ((this.position + 1) !== num) {
          this.isChanging = true;
          this.advantages[this.position].active = false;
          this.position = num - 1;
          this.advantages[this.position].active = true;
          this.isChanging = false;
        }
      }
    }
  }

  changeCardSwipe(page: number) {
    if (page < 0 || page >= this.advantages.length) {
      return;
    }
    const currentAdvantage = this.advantages[this.position];
    if (currentAdvantage) {
      currentAdvantage.active = false;
      this.position = page;
      this.advantages[this.position].active = true;
    }
  }

  getClasses() {
    return [...this.advantages[this.position].classes, this.advantages[this.position].active ? 'visible' : 'hidden'];
  }
}
