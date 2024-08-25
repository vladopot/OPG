import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [],
  templateUrl: './web.component.html',
  styleUrl: './web.component.scss'
})
export class WebComponent {

  router = inject(Router);

  goTo(link: string) {
    this.router.navigateByUrl(link);
  }
}
