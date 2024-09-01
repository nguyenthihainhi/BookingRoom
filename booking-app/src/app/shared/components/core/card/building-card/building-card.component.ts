import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { icons } from '../../../../../core/config/icons.config';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Building } from '../../../../../core/models/building';

@Component({
  selector: 'app-building-card',
  templateUrl: './building-card.component.html',
  styleUrl: './building-card.component.css'
})
export class BuildingCardComponent implements OnInit {
  @Input() building!: Building;
  @Output() updateBuilding = new EventEmitter<Building>();
  // @Output() deleteBuilding = new EventEmitter<number>();
  icon = icons;
  onLabel: String = 'Hoạt động';
  offLabel: String = 'Dừng hoạt động';
  checked: boolean = true;


  constructor(private confirmationService: ConfirmationService, private messageService: MessageService,  ){

  }

  confirmToggle(event: any) {
    if (!this.checked) {
      this.confirmationService.confirm({
        message: 'Bạn có xác nhận muốn dừng hoạt động tòa nhà này không?',
        header: 'Xác nhận dừng hoạt động tòa Alpha',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:" p-button-text px-2 py-1",
        rejectButtonStyleClass:"p-button-danger p-button-text px-2 py-1",
        acceptIcon:"none",
        rejectIcon:"none",
        acceptLabel: "Confirm",
        rejectLabel: "Cancel",
        accept: () => {
          this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Đã dừng hoạt động tòa nhà Alpha' });
          this.checked = event.checked;
        },
        reject: () => {
          this.messageService.add({ severity: 'info', summary: 'Rejected', detail: 'Bạn đã từ bỏ ý định' });
          this.checked = !event.checked;
        }
    });

  }else{
    this.confirmationService.confirm({
      message: 'Bạn có xác nhận muốn hoạt động tòa nhà này không?',
      header: 'Xác nhận hoạt động tòa Alpha',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:" p-button-text px-2 py-1",
      rejectButtonStyleClass:"p-button-danger p-button-text px-2 py-1",
      acceptIcon:"none",
      rejectIcon:"none",
      acceptLabel: "Confirm",
      rejectLabel: "Cancel",
      accept: () => {
          this.checked = event.checked;
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Tòa nhà Alpha đã được hoạt động' });
          
      },
      reject: () => {
        this.checked = !event.checked;
        this.messageService.add({ severity: 'success', summary: 'Rejected', detail: 'Bạn đã từ bỏ ý định' });
      }
    });
  }
}
onUpdate() {
  this.updateBuilding.emit(this.building);
}
ngOnInit(): void {
    
}
}
