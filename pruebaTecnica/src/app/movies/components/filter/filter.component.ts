import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent {
  showDateInputs = false;
  startDate: string = '';
  endDate: string = '';

  toggleDateInputs() {
    this.showDateInputs = !this.showDateInputs;
  }

  search() {
    console.log('Rango de fechas:', this.startDate, this.endDate);
    // Aquí puedes agregar la lógica de búsqueda con las fechas seleccionadas.
  }

}
