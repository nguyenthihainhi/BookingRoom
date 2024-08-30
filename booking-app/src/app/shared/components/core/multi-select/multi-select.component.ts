import { Component, Input } from '@angular/core';
// import { DataSelect } from '../../../../core/config/fiter.config';
import { SelectItem, SelectItemGroup } from 'primeng/api';



@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent {

  @Input()
  data!: SelectItemGroup[] | SelectItem[];

  @Input()
  placeholder!: string;

  @Input()
  isGroup: boolean = false;


  @Input()
  scrollHeight: string = '250px';


  @Input()
  disabled: boolean = false;

  @Input()
  styleClass?: string = '';
  

  selectedData!: SelectItem[];

  constructor() {

  }

}
