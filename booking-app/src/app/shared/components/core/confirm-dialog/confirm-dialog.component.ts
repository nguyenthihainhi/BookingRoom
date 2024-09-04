import { Component, Input, TemplateRef } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
  // providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogComponent {

  @Input()
  iconLabelRef!: TemplateRef<any>;
  
  @Input()
  actionConfirmRef!: TemplateRef<any>;
  
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}
}
