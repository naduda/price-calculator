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
      title: 'Меню',
      children: [
        { title: 'Калькулятор', routerLink: 'calculator/client' },
        { title: 'Компоненти', routerLink: 'calculator/settings' },
      ],
    },
  ];

}
