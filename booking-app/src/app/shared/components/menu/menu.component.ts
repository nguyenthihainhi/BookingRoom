import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { icons } from '../../../core/config/icons.config';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  items: MenuItem[] = [];
  icon = icons;
  ngOnInit() {
    this.items = [
      {
        label: 'Mail',
        icon: icons.arrowRight,
        badge: '5',
        items: [
          {
            label: 'Compose',
            icon: icons.arrowRight,
            shortcut: '⌘+N'
          },
          {
            label: 'Inbox',
            icon: icons.arrowRight,
            badge: '5'
          },
          {
            label: 'Sent',
            icon: icons.arrowRight,
            shortcut: '⌘+S'
          },
          {
            label: 'Trash',
            icon: icons.arrowRight,
            shortcut: '⌘+T'
          }
        ]
      },
      {
        label: 'Reports',
        icon: icons.arrowRight,
        shortcut: '⌘+R',
        items: [
          {
            label: 'Sales',
            icon: icons.arrowRight,
            badge: '3'
          },
          {
            label: 'Products',
            icon: icons.arrowRight,
            badge: '6'
          }
        ]
      },
      {
        label: 'Profile',
        icon: icons.arrowRight,
        shortcut: '⌘+W',
        items: [
          {
            label: 'Settings',
            icon: icons.arrowRight,
            shortcut: '⌘+O'
          },
          {
            label: 'Privacy',
            icon: icons.arrowRight,
            shortcut: '⌘+P'
          }
        ]
      }
    ];
  }

  // toggleAll() {
  //   const expanded = !this.areAllItemsExpanded();
  //   this.items = this.toggleAllRecursive(this.items, expanded);
  // }

  // private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
  //   return items.map((menuItem) => {
  //     menuItem.expanded = expanded;
  //     if (menuItem.items) {
  //       menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
  //     }
  //     return menuItem;
  //   });
  // }

  // private areAllItemsExpanded(): boolean {
  //   return this.items.every((menuItem) => menuItem.expanded);
  // }
}
