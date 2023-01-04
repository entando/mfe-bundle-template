import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewEncapsulation } from '@angular/core';
import { TableComponent } from "./table/table.component";
import { ModalComponent } from "./modal/modal.component";
import { ContainerComponent } from './container/container.component';

@Component({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    selector: 'angular-widget',
    standalone: true,
    encapsulation: ViewEncapsulation.ShadowDom,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, TableComponent, ModalComponent, ContainerComponent]
})
export class AppComponent {
  title = 'angular-widget';
}
