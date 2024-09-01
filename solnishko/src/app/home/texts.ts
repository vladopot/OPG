import { advantages } from './../models/advantages_model';

export const advantages_array: advantages[] = [
    {
      name: 'Dedicated Team',
      text: 'Empower Your Business with Our Dedicated Team',
      link: 'assets/team.jpg',
      classes: ['orange'],
      active: true,
      link_text: 'Our team'
    },
    {
      name: 'Proactive developers',
      text: 'Unlock Success with Proactive Developers',
      link: 'assets/Developers.jpg',
      classes: ['blue'],
      active: false,
      link_text: 'Our benefits'
    },
    {
      name: 'Flexible contract',
      text: 'Agile Contracts: Tailored to Your Needs',
      link: 'assets/contract.jpg',
      classes: ['purple'],
      active: false,
      link_text: 'Our contract',
      web_page: 'getIntouch'
    },
    {
      name: '24/7 support',
      text: 'Round-the-Clock Assistance: Your Reliable Support Partner',
      link: 'assets/support.jpg',
      classes: ['green'],
      active: false,
      link_text: 'Support'
    }
];