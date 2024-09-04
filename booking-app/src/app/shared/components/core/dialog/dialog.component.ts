import { Component, DestroyRef, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { DialogService } from '../../../../core/services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent implements OnInit {

  @Input()
  templateRefContent!: TemplateRef<any>;

  @Input()
  templateRefHeader!: TemplateRef<any>;


  @Input()
  templateRefFooter!: TemplateRef<any>;

  @Input()
  widthOverride!: string;


  visible: boolean = false;
  destroyRef = inject(DestroyRef);

  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {
    this.followToggle();
  }


  followToggle() : void {
    let subscription = this.dialogService.toggle$.subscribe({
      next: (isVisible: boolean) => {
        this.visible = isVisible;
        console.log(this.visible);
      }
    })

    this.destroyRef.onDestroy(() => subscription.unsubscribe())
  }

  
  hiddenDialog(event: any) {
    console.log('>>> event dialog:', event);
    this.dialogService.updateDialog();
  }
}
