import { Component, Input, OnDestroy, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { icons } from '../../../core/config/icons.config';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Building } from '../../../core/models/building';
import { BuildingService } from '../../../core/services/building.service';
@Component({
  selector: 'app-manage-building',
  templateUrl: './manage-building.component.html',
  styleUrl: './manage-building.component.css',
})
export class ManageBuildingComponent implements OnInit, OnDestroy {
  position: string = 'center';
  header: string = '';
  icon = icons;
  onLabel: String = 'Hoạt động';
  offLabel: String = 'Dừng hoạt động';
  checked: boolean = true;
  buildings: Building[] = [];
  selectedBuilding: Building | null = null;
  visible : boolean = false;
  showDialog(position: string, header: string) {
    this.header = header;
    this.position = position;
    this.visible = true;
    this.selectedBuilding = new Building();
}
  ngOnInit() {
    this.buildings = this.buildingService.getBuildings();
  }
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private buildingService : BuildingService ){

    
  }
  // loadBuildings(): void{
  //   this.buildingService.getBuildings().subscribe((buildings: Building[]) =>{
  //     this.buildings = buildings;
  //   });
  // }
  onUpdateBuilding(building: Building, position: string, header: string) {
    this.header = header;
    this.position = position;
    this.visible = true;
    this.selectedBuilding = { ...building };
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
cancelForm() {
  this.selectedBuilding = null;
}
saveBuilding(building: Building){
  if(building.buildingId){
    this.buildingService.addBuilding(building).subscribe(() => {
      // this.loadBuildings();
    });
  }else{
    this.buildingService.editBuiding(building).subscribe(() => {
      // this.loadBuildings();
    });
  }
  this.selectedBuilding = null; // Reset after saving
}
  ngOnDestroy(): void {
  }
}
