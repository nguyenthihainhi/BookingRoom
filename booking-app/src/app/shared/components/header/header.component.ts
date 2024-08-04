import { Component } from '@angular/core';
import { images } from '../../../core/config/image.config';
import { icons } from '../../../core/config/icons.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  logo = images;
  icon = icons;
}
