import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { TABTABLEUSER } from '../../../core/config/tableUser.config';
import { icons } from '../../../core/config/icons.config';
import { columns, data, demoUser, genders, majors, provinces, semesters, status, tabSelectButton } from '../../../core/utils/dummyData';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddUserComponent } from '../../../shared/components/modal/add-user/add-user.component';
import { InfoUserFormComponent } from '../../../shared/components/modal/info-user-form/info-user-form.component';
import { UpdateUserComponent } from '../../../shared/components/modal/update-user/update-user.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { filterUser, pagination, User } from '../store/admin.states';
import { selectFilter, selectPagination, selectUser } from '../store/admin.feature';
import { Observable } from 'rxjs';
import { filterUsers, loadUsers } from '../store/admin.actions';
import { AppState } from '../../../core/app.state';
import { ItableColumn, ITableItem, TableUser } from '../../../core/interfaces/table.interface';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrl: './manage-user.component.css',
  providers: [DialogService]
})
export class ManageUserComponent implements OnInit, OnDestroy {
  label_User = signal<TABTABLEUSER>(TABTABLEUSER.ALL);
  icon = icons;
  majors = majors;
  status = status
  demoUser = demoUser;
  tabSelectButton = tabSelectButton;
  data = data;
  columns = columns;
  _selectedColumns: ItableColumn[] = [];
  // filter table dummy
  isShowFilter: boolean = false;
  semesters = semesters;
  genders = genders;
  provinces = provinces;

  // tabview
  get selectedColumns(): ItableColumn[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: ItableColumn[]) {
    //restore original order
    this._selectedColumns = this.columns.filter((col) => val.includes(col));
  }


  // test list
  public listUser$: Observable<User[]>;
  public pagination$: Observable<pagination>;
  public filter$: Observable<filterUser | null>;


  // test list


  //declare variable and reference

  /**DynamicDialogRef:  provide some method to interacting with and managing a dynamically 
   * created DynamicDialog component
  */
  dynaref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private store: Store<AppState>
  ) {
    this.listUser$ = this.store.select(selectUser);
    this.pagination$ = this.store.select(selectPagination);
    this.filter$ = this.store.select(selectFilter);
  }

  ngOnInit() {
    this._selectedColumns = this.columns;
    this.store.dispatch(loadUsers());

  }



  // test list
  //test search
  handleSearchListUser(searchQuery: string) {
    let filterDemo: filterUser = {
      search: searchQuery
    }
    this.store.dispatch(filterUsers({filter: filterDemo}))

  }
  //test search
  // test list


  /**
   * puporse: show dialog add user
   * service: dialogService primeng
   */
  openModalAddUser() {
    this.dynaref = this.dialogService.open(AddUserComponent,
      {
        header: 'Thêm người dùng mới',
        width: '30vw',
        draggable: true,
        modal: true,
        breakpoints: {
          '1199px': '75vw', '575px': '90vw'
        }
      },
    )
    this.dynaref.onClose.subscribe({
      next: () => {
        console.log('>>> close: ok close component this');
      }
    })
  }

  /**
 * puporse: show dialog confrm delele a record
 * service: confirmationService primeng
 */
  handleConfirmDeleteRecord(data: ITableItem) {
    this.confirmationService.confirm({
      message: `Bạn có muốn xóa người dùng ${data['name']}?`,
      header: 'Xác nhận xóa người dùng',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-danger p-button-text px-2 py-1",
      rejectButtonStyleClass: "p-button-text p-button-text px-2 py-1",
      acceptIcon: "none",
      rejectIcon: "none",

      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Đã xóa người dùng này' });
      },
      reject: () => {
        this.messageService.add({ severity: 'info', summary: 'Rejected', detail: 'Bạn đã từ bỏ ý định' });
      }
    });
  }


  /**
 * puporse: show dialog update user
 * service: dialogService primeng
 */
  openModalUpdateUser(data: ITableItem) {
    this.dynaref = this.dialogService.open(UpdateUserComponent,
      {
        header: `Chỉnh sửa người dùng ${data['name']}`,
        width: '30vw',
        modal: true,
        contentStyle: { "overflow": "auto" },
        breakpoints: {
          '1199px': '75vw', '575px': '90vw'
        }
      },
    )
    this.dynaref.onClose.subscribe({
      next: () => {
        console.log('>>> close: ok close component this');
      }
    })

  }



  /**
* puporse: show dialog detail user
* service: dialogService primeng
*/
  getDetailRecord(data: TableUser) {
    this.dynaref = this.dialogService.open(InfoUserFormComponent,

      {
        data: data,
        header: `Người dùng ${data['name']}`,
        width: '40vw',
        position: 'top',
        modal: true,
        breakpoints: {
          '1199px': '75vw', '575px': '90vw'
        }
      },
    )
    this.dynaref.onClose.subscribe({
      next: () => {
        console.log('>>> close: ok close component this');
      }
    })
  }


  /**
 * puporse: show filter user
 * service: none
 */
  toggleFilter() {
    this.isShowFilter = !this.isShowFilter;
  }

  ngOnDestroy(): void {
  }

}