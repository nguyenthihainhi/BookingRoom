import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { cellStyles, ItableColumn, ItableItem } from '../../../../core/config/table.config';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {

  @Input()
  data: ItableItem[] = [];

  @Input()
  columns: ItableColumn[] = [];

  @Input()
  customBodyTemplate!: TemplateRef<any>;

  @Input()
  addActionTemplate?: TemplateRef<any>;
  @Input()
  paginator: boolean = false;

  @Input()
  showCurrentPageReport: boolean = false;

  @Input()
  firstIndexItem: number = 0;

  @Input()
  numberOfRow: number = 10;

  @Input()
  sortMode: 'single' | 'multiple' = 'single';

  @Input()
  selectionMode: 'single' | 'multiple' = 'single';
  @Input()
  showCheckboxColumn: boolean = false;

  @Input()
  tableStyleClass : string = '';

// checkbox work?
  selectedData!: ItableItem[];


  ngOnInit(): void {

  }

  next() {
    this.firstIndexItem = this.firstIndexItem + this.numberOfRow;
  }

  prev() {
    this.firstIndexItem = this.firstIndexItem - this.numberOfRow;
  }

  reset() {
    this.firstIndexItem = 0;
  }

  pageChange(event: any) {
    this.firstIndexItem = event.first;
    this.numberOfRow = event.rows;
    console.log(this.firstIndexItem,this.numberOfRow );
  }

  isLastPage(): boolean {
    return this.data ? this.firstIndexItem === this.data.length - this.numberOfRow : true;
  }

  isFirstPage(): boolean {
    return this.data ? this.firstIndexItem === 0 : true;
  }


  // custom style cell in table

  getCellClass(rowData: any, field: string): string | string[] {
    const fieldStyles = cellStyles[field];
    if (fieldStyles) {
      return fieldStyles[rowData[field]] || '';
    }
    return '';
  }

}

