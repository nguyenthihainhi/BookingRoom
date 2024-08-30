import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() label: string = 'button';
  @Input() posIcon: 'right' | 'left' = 'left';
  @Input() btnType: 'button' | 'submit' | 'reset' = 'button';
  @Input() ngClass: string = '';
  @Input() disable: boolean = false;
  @Input() raised: boolean = false;
  @Input() rounded: boolean = false;
  @Input() textxual: boolean = false;
  @Input() outlined: boolean = false;
  @Input() fontSize = '14px';
  @Input() size: 'small' | 'large' | undefined;
  @Input() width = '';
  @Input() height: string = '40px';
  @Input() borderr: string = 'none';
  @Input() colorText: string = 'var(--highlight-text-color)';
  @Input() bgColor: string = 'var(--highlight-bg)';

  @Output('handleClickButton') eventClick: EventEmitter<any> = new EventEmitter();

  handleClick(e: Event): void {
    // console.log(e);
    this.eventClick.emit(e);
  }

}
