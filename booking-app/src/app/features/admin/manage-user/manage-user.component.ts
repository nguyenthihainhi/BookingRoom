import { Component, Input, OnDestroy, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { TABTABLEUSER } from '../../../core/config/tableUser.config';
import { icons } from '../../../core/config/icons.config';
import { ItableColumn, ITableItem, TableUser } from '../../../core/config/table.config';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { columns, data, demoUser, genders, majors, provinces, semesters, status, tabSelectButton } from '../../../core/utils/dummyData';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddUserComponent } from '../../../shared/components/modal/add-user/add-user.component';
import { AnonymousComponent } from '../../../shared/components/anonymous/anonymous.component';
import { InfoUserFormComponent } from '../../../shared/components/modal/info-user-form/info-user-form.component';
import { UpdateUserComponent } from '../../../shared/components/modal/update-user/update-user.component';
import { ConfirmationService, MessageService } from 'primeng/api';

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


  // @ViewChild('confirmDelete') modalConfirmDialog?: ConfirmDialogComponent;

  //declare variable and reference
  /**DynamicDialogRef:  provide some method to interacting with and managing a dynamically 
   * created DynamicDialog component
  */
  dynaref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    private confirmationService: ConfirmationService,
     private messageService: MessageService
  ) { }

  ngOnInit() {
    this._selectedColumns = this.columns;
  }


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

  handleConfirmDeleteRecord(data: ITableItem) {
    this.confirmationService.confirm({
      message: `Bạn có muốn xóa người dùng ${data['name']}?`,
      header: 'Xác nhận xóa người dùng',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text px-2 py-1",
      rejectButtonStyleClass:"p-button-text p-button-text px-2 py-1",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: () => {
          this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Đã xóa người dùng này' });
      },
      reject: () => {
          this.messageService.add({ severity: 'info', summary: 'Rejected', detail: 'Bạn đã từ bỏ ý định' });
      }
  });
  }
  openModalUpdateUser(data: ITableItem) {
    this.dynaref = this.dialogService.open(UpdateUserComponent,
      {
        header: `Chỉnh sửa người dùng ${data['name']}`,
        width: '30vw',
        modal: true,
        contentStyle: {"overflow": "auto"},
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


  // confirmDialog(dialog: ConfirmDialog) {
  //   dialog.accept();
  //   console.log('Confirmed');
  // }

  // cancelDialog(dialog: ConfirmDialog) {
  //   dialog.reject();
  //   console.log('Reject');
  // }

  toggleFilter() {
    this.isShowFilter = !this.isShowFilter;
  }

  getDetailRecord(data: TableUser){
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

  ngOnDestroy(): void {
  }

}
