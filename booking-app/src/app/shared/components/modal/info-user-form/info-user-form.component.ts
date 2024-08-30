import { Component, input, signal, WritableSignal } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { demoUser } from '../../../../core/utils/dummyData';

@Component({
  selector: 'app-info-user-form',
  templateUrl: './info-user-form.component.html',
  styleUrl: './info-user-form.component.css'
})
export class InfoUserFormComponent {

  infoUser: WritableSignal<any> = signal(demoUser);
  ngOnInit(): void {
      this.getDataDialog();
    }

  constructor(private ref: DynamicDialogRef, private config: DynamicDialogConfig ){}

    getDataDialog(){
        const data = this.config.data as any;
        // this.infoUser?.set(data);
        console.log(data);
    }
  
}
