import { Component, Input, OnInit, signal, TemplateRef, ViewEncapsulation } from '@angular/core';
import { SELECTBUTTON, TABTABLE } from '../../../core/config/tableUser.config';
import { IAccount, IStudentProfile } from '../../../core/config/account.config';
import { USER_ROLE } from '../../../core/utils/constant';
import { icons } from '../../../core/config/icons.config';
import { ItableColumn, ItableItem } from '../../../core/config/table.config';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css',
})
export class ManageUserComponent implements OnInit {
  label_User = signal<TABTABLE>(TABTABLE.ALL);
  demoUser: IAccount<IStudentProfile> = {
    name: "Nguyễn Văn A",
    address: "Bắc Ninh",
    email: "namnhhe161918@fpt.edu.vn",
    phone: '0327033756',
    role: USER_ROLE.STUDENT,
    isActive: true,
    status: true,
    avatar: 'assets/users/user-6.jpg',
    profile: {
      major: "Kỹ thuật phần mềm",
      graduationYear: 2024,
      keyYear: 'K16',
      codeStudent: "HE161918"
    }
  }
  tabSelectButton: SELECTBUTTON[] = [
    {
      label: 'Xem tất cả',
      value: TABTABLE.ALL
    },
    {
      label: 'Sinh viên',
      value: TABTABLE.STUDENT
    },
    {
      label: 'Nhân viên',
      value: TABTABLE.EMPLOYEE
    },
    {
      label: 'Nhân viên quản lý',
      value: TABTABLE.MANAGER
    },
  ]
  icon = icons;

  data: ItableItem[] = [
    {
      id: '1',
      name: 'Ngô Hữu Nam',
      email: 'namnhhe161918@fpt.edu.vn',
      phone: '0327033756',
      code: 'HE161918',
      gender: 'nam',
      dateJoin: '08-08-2024',
      role: 'sinh viên',
      status: 'hoạt động'
    },
    {
      id: '2',
      name: 'Trần Thị Mai',
      email: 'maitt123456@fpt.edu.vn',
      phone: '0312345678',
      code: 'HE123456',
      gender: 'nữ',
      dateJoin: '15-07-2023',
      role: 'sinh viên',
      status: 'hoạt động'
    },
    {
      id: '3',
      name: 'Lê Văn Hải',
      email: 'haile123456@fpt.edu.vn',
      phone: '0345678901',
      gender: 'nam',
      dateJoin: '22-09-2022',
      role: 'nhân viên',
      status: 'hoạt động'
    },
    {
      id: '4',
      name: 'Phạm Thị Hồng',
      email: 'hongpt234567@fpt.edu.vn',
      phone: '0356789012',
      gender: 'nữ',
      dateJoin: '12-10-2021',
      role: 'nhân viên quản lý',
      status: 'hoạt động'
    },
    {
      id: '5',
      name: 'Nguyễn Văn An',
      email: 'an.nv123456@fpt.edu.vn',
      phone: '0367890123',
      code: 'HE345678',
      gender: 'nam',
      dateJoin: '30-06-2022',
      role: 'sinh viên',
      status: 'hoạt động'
    },
    {
      id: '6',
      name: 'Đặng Thị Bích',
      email: 'bichdt345678@fpt.edu.vn',
      phone: '0378901234',
      gender: 'nữ',
      dateJoin: '25-12-2020',
      role: 'nhân viên',
      status: 'hoạt động'
    },
    {
      id: '7',
      name: 'Vũ Văn Sơn',
      email: 'sonvu456789@fpt.edu.vn',
      phone: '0389012345',
      gender: 'nam',
      dateJoin: '03-04-2019',
      role: 'nhân viên quản lý',
      status: 'hoạt động'
    },
    {
      id: '8',
      name: 'Lương Thị Thúy',
      email: 'thuylt567890@fpt.edu.vn',
      phone: '0390123456',
      code: 'HE678901',
      gender: 'nữ',
      dateJoin: '18-05-2021',
      role: 'sinh viên',
      status: 'hoạt động'
    },
    {
      id: '9',
      name: 'Bùi Văn Hưng',
      email: 'hungbv678901@fpt.edu.vn',
      phone: '0311234567',
      gender: 'nam',
      dateJoin: '14-11-2021',
      role: 'nhân viên',
      status: 'hoạt động'
    },
    {
      id: '10',
      name: 'Nguyễn Thị Lan',
      email: 'lan.nguyen789012@fpt.edu.vn',
      phone: '0322345678',
      gender: 'nữ',
      dateJoin: '07-08-2022',
      role: 'nhân viên quản lý',
      status: 'hoạt động'
    }
  ];

  columns: ItableColumn[] = [
    { field: 'name', header: 'Tên', sortable: true },
    { field: 'email', header: 'Email', sortable: true },
    { field: 'phone', header: 'Số điện thoại', sortable: false },
    { field: 'code', header: 'Mã sinh viên', sortable: true },
    { field: 'gender', header: 'Giới tính', sortable: true },
    { field: 'dateJoin', header: 'Ngày tham gia', sortable: false },
    { field: 'role', header: 'vai trò', sortable: true },
    { field: 'status', header: 'Trạng thái', sortable: true },
  ];

  
  @Input()
  customBodyTemplate!: TemplateRef<any>;

  ngOnInit() {

  }
}
