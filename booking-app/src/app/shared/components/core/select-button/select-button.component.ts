import { Component, input, signal } from '@angular/core';
import { SELECTBUTTON, TABTABLE } from '../../../../core/config/tableUser.config';
import { SelectButtonChangeEvent } from 'primeng/selectbutton';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.css'
})
export class SelectButtonComponent {
  stateOptions = input.required<SELECTBUTTON[]>();
  value = signal<string>('');

  handleChoice(event: SelectButtonChangeEvent) {
    console.log(event);
  }
}
