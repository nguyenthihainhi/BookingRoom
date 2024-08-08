import { Component, inject, output, signal } from '@angular/core';
import { images } from '../../../core/config/image.config';
import { icons } from '../../../core/config/icons.config';
import { HeaderService } from '../../../core/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo = images;
  icon = icons;
  flag = signal<boolean>(false);
  private headerService = inject(HeaderService);

  triggerEventHumberger() {
    this.headerService.emitEventHumberger(!this.flag());
    this.flag.set(!this.flag());
  }
}