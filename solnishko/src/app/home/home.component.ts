import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { advantages_array } from './texts';
import { SwipeDirective } from '../directives/swipe.directive';
import { Router } from '@angular/router';

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
  public coordinat = {
    'transform': `translateX(-${this.position*(100 / this.advantages.length)}%)`
  };
  private isChanging = false;

  constructor() {}

  router = inject(Router);

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
        this.updateStyle();
      }
    }
  }

  updateStyle() {
    this.coordinat = {
      'transform': `translateX(-${this.position*(100 / this.advantages.length)}%)`
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
    this.updateStyle();
  }

  goToWeb(url = this.advantages[this.position].web_page) {
    if (url) {
      this.router.navigateByUrl(url);
    }
  }

  getClasses() {
    return [...this.advantages[this.position].classes, this.advantages[this.position].active ? 'visible' : 'hidden'];
  }
}
