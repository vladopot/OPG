import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { benefits } from '../models/benefits_model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public isHoverOurWork: boolean = false;
  public isHoverHire: boolean = false;

  public benefits: benefits[] = [
    {
      name: 'Dedicated Team',
      text: 'Empower Your Business with Our Dedicated Team',
      link: 'assets/team.jpg'
    },
    {
      name: 'Proactive developers',
      text: 'Unlock Success with Proactive Developers',
      link: 'assets/Developers.png'
    },
    {
      name: 'Flexible contract',
      text: 'Agile Contracts: Tailored to Your Needs',
      link: 'assets/contract.png'
    },
    {
      name: '24/7 support',
      text: 'Round-the-Clock Assistance: Your Reliable Support Partner',
      link: 'assets/support.webp'
    }
  ];
}
