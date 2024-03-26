import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showTabletMenu: boolean = false;
  hideField: boolean = true;

  showBurger() {
    this.showTabletMenu = !this.showTabletMenu;
  }

  showHideField() {
    this.hideField = !this.hideField;
  }
}
