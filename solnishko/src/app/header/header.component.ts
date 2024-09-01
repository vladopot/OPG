import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  private router = inject(Router);

  goToWeb() {
    this.router.navigateByUrl('/web-dev');
    this.hideField = true;
  }

  goHome() {
    this.router.navigateByUrl('');
    this.hideField = true;
  }

  showBurger() {
    this.showTabletMenu = !this.showTabletMenu;
  }

  showHideField() {
    this.hideField = !this.hideField;
  }

  goToInTouch() {
    this.router.navigateByUrl('getIntouch');
    this.showBurger();
  }
}
