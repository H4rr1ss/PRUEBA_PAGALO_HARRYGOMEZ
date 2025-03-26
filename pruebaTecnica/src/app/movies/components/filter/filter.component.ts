import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: []
})
export class FilterComponent {
  showDateInputs = false;
  startDate: string = '';
  endDate: string = '';

  @Output() dateRangeSelected = new EventEmitter<{ startDate: string; endDate: string }>();

  toggleDateInputs() {
    this.showDateInputs = !this.showDateInputs;
  }

  search() {
    if (!this.startDate || !this.endDate) return; // Validar que ambas fechas estén seleccionadas
    this.dateRangeSelected.emit({ startDate: this.startDate, endDate: this.endDate });
    this.showDateInputs = false; // Ocultar el selector después de buscar
  }
}
