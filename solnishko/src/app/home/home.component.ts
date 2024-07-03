import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { advantages_array } from './texts';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  public advantages = advantages_array;
  public position = 0;
  private isChanging = false;

  constructor() { }

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

  // changeCardFurther() {
  //   const currentAdvantage = this.advantages[this.position];
  //   if (currentAdvantage) {
  //     currentAdvantage.active = false;
  //     setTimeout(() => {
  //       this.position = (this.position < this.advantages.length - 1) ? this.position + 1 : 0;
  //       this.advantages[this.position].active = true;
  //     }, 500);
  //   }
  // }

  getClasses() {
    return [...this.advantages[this.position].classes, this.advantages[this.position].active ? 'visible' : 'hidden'];
  }
}
