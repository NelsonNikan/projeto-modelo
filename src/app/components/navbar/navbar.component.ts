import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navIcons = [
    'icon-home.svg',
    'icon-clock.svg',
    'icon-heart.svg',
    'icon-user.svg',
  ];

  selectedIcon: string | null = null;

  selectIcon(iconName: string): void {
    this.selectedIcon = iconName;
  }
}
