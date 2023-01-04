import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html'
})
export class TableComponent {
  data = [
    {
      id: 1,
      name: 'Cy Ganderton',
      job: 'Quality Control Specialist',
      color: 'Blue'
    },
    {
      id: 2,
      name: 'Hart Hagerty',
      job: 'Desktop Support Technician',
      color: 'Purple'
    },
    {
      id: 3,
      name: 'Brice Swyre',
      job: 'Tax Accountant',
      color: 'Red'
    }
  ]
}
