import {  Component, Input, OnDestroy, OnInit, signal, TemplateRef, ViewChild } from '@angular/core';
import { icons } from '../../../../core/config/icons.config';
import { ActivatedRoute } from '@angular/router';
import { BuildingService } from '../../../../core/services/building.service';
import { Building } from '../../../../core/models/building';
import { Room } from '../../../../core/models/room';
import { RoomService } from '../../../../core/services/room.service';

@Component({
  selector: 'app-building-detail',
  templateUrl: './building-detail.component.html',
  styleUrl: './building-detail.component.css'
})
export class BuildingDetailComponent implements OnInit, OnDestroy {
  
  icon = icons;
  buildingName!: string;
  currentId!: number;
  building: Building | undefined = undefined;
  rooms: Room[] = [];
  constructor(private route: ActivatedRoute, private buildingService : BuildingService, private roomService : RoomService) { }
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.currentId = +idParam; // Convert to number
      this.getBuildingDetail();
    } else {
      console.error('No ID parameter found');
    }
    this.rooms = this.roomService.getRooms();
  }
  // Get building by id in param
  private getBuildingDetail(): void {
    this.building = this.buildingService.getBuildingById(this.currentId);
    if (!this.building) {
      console.error('Building not found');
    }
  }
  ngOnDestroy(): void {
      
  }


}
