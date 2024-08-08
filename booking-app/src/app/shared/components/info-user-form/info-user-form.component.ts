import { Component, input, signal } from '@angular/core';
import { IAccount } from '../../../core/config/account.config';

@Component({
  selector: 'app-info-user-form',
  templateUrl: './info-user-form.component.html',
  styleUrl: './info-user-form.component.css'
})
export class InfoUserFormComponent {

  infoUser = input<IAccount<any>>();
}
