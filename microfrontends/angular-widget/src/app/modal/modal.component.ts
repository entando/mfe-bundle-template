import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() buttonText  = 'Open Modal'
  @Input() actionText = 'Yay!'
  @Input() title = 'Welcome'
}
