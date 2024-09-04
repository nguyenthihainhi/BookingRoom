import { Component, OnInit } from '@angular/core';
import { BaseDropDown } from '../../../../core/config';
import { USER_ROLE } from '../../../../core/utils/constant';




@Component({
  selector: 'app-add-user',
  template: `
<form>
<div class="row mb-3">
    <label for="inputPassword3" class="col-sm-12 col-form-label">Tên người dùng <span class="text-danger fw-bold">*</span></label>
    <div class="col-sm-12">
      <input type="text" class="form-control" id="inputUser3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-12 col-form-label">Email <span class="text-danger fw-bold">*</span></label>
    <div class="col-sm-12">
      <input type="email" class="form-control" id="inputEmail3">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-12 pt-0">Chọn vai trò <span class="text-danger fw-bold">*</span></legend>
    <div class="col-sm-12">
    <p-dropdown 
    [options]="roles"
    [(ngModel)]="selectedRoles"
    name="roles"
    optionLabel="name"
    placeholder="Lựa chọn vai trò của người dùng" 
    variant="outlined"
    
    />
    </div>
  </fieldset>
  <div class="row  mb-3">
  <div class=" d-flex flex-wrap gap-2 flex-row-reverse">
    <button type="submit" class="btn rounded-1 text-white" style="background-color: var(--oragne600);">Thêm</button>
<button type="reset" class="btn btn-outline-dark rounded-1 me-2">Hủy</button>
                </div>
  </div>
</form>
`,
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {

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
