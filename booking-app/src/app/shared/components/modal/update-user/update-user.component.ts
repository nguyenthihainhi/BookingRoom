import { Component } from '@angular/core';
import { USER_ROLE } from '../../../../core/utils/constant';
import { BaseDropDown } from '../../../../core/interfaces/anonymous.interface';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  roles: BaseDropDown[] | undefined;

  selectedRoles: BaseDropDown | undefined;

  ngOnInit() {
    this.roles = [
      { name: USER_ROLE.ADMIN, code: 'ad' },
      { name: USER_ROLE.HEADSTAFF, code: 'hnv' },
      { name: USER_ROLE.STAFF, code: 'nv' },
      { name: USER_ROLE.STUDENT, code: 'sv' },

    ]
  }

}
