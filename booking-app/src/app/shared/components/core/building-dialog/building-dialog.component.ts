import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Building } from '../../../../core/models/building';

@Component({
  selector: 'app-building-dialog',
  templateUrl: './building-dialog.component.html',
  styleUrl: './building-dialog.component.css'
})
export class BuildingDialogComponent {
  @Input() building: Building = new Building();
  @Input() visible: boolean = false;
  @Input() header: string = '';
  @Input() position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';
  @Output() saveBuilding = new EventEmitter<Building>();
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cancel = new EventEmitter<void>();
  onCancel() {
    this.visible = false;
    this.visibleChange.emit(this.visible); // Emit the change to the parent component
    this.cancel.emit();
  }

  onSave() {
    // Perform save logic here
    this.visible = false;
    this.saveBuilding.emit(this.building);
    this.visibleChange.emit(this.visible); // Emit the change to the parent component
  }
}
