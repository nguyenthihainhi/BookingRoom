import { Component, HostBinding, inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { icons } from '../../../core/config/icons.config';
import { HeaderService } from '../../../core/services/header.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  // encapsulation: ViewEncapsulation.None,
})
export class MenuComponent {
  items: MenuItem[] = [];
  isShowSidebar: boolean = false;
  icon = icons;
 private headerService = inject(HeaderService);

 @HostBinding('class')
  get menuClasses() {
    return {
      'menu-close': this.isShowSidebar
    };
  }


 constructor(private renderer: Renderer2){

 }
  ngOnInit() {
    this.handeSidebar();
  }

  handeSidebar(){
    this.headerService.event$.subscribe(
      {
        next: (isCheck) => {
         this.isShowSidebar = isCheck;
        }
      }
    );
  }


}
