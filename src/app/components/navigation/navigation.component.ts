import { Component } from '@angular/core';

interface IMenuItem {
  title: string;
  children: {
    title: string;
    routerLink: string;
  }[];
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {

  items: IMenuItem[] = [
    {
      title: 'Menu',
      children: [
        { title: 'Client', routerLink: 'calculator/client' },
        { title: 'Settings', routerLink: 'calculator/settings' },
      ],
    },
  ];

}
