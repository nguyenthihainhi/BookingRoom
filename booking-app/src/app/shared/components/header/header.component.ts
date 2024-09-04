import { Component, inject, output, signal } from '@angular/core';
import { images } from '../../../core/config/image.config';
import { icons } from '../../../core/config/icons.config';
import { HeaderService } from '../../../core/services/header.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // static variable 
  logo = images;
  icon = icons;
  lightModeI = 'pi pi-sun';
  darkModeI = 'pi pi-moon';

  // declare variable 
  checkedMode: boolean = false;
  flag = signal<boolean>(false);
  
  // inject
  #document = inject(DOCUMENT);
  private headerService = inject(HeaderService);


// method 
  triggerEventHumberger() {
    this.headerService.emitEventHumberger(!this.flag());
    this.flag.set(!this.flag());
  }

  toggleLightDark() {
    const linkElement = this.#document.getElementById(
      'app-theme',
    ) as HTMLLinkElement;
    const bsTheme = this.#document.getElementById('bs-theme') as HTMLHtmlElement;    

    if (linkElement.href.includes('light')) {
      linkElement.href = 'theme-dark.css';
      this.checkedMode = true;
    } else {
      linkElement.href = 'theme-light.css';
      this.checkedMode = false;
    }
    bsTheme.setAttribute('data-bs-theme', this.checkedMode ? 'dark' : 'light');

    
  }
}