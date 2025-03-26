import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-button',
  templateUrl: './tab-button.component.html',
  styles: [
  ]
})
export class TabButtonComponent {
  @Input() tabName: string = '';
  @Input() selectedTab: string = '';
  @Output() tabSelected = new EventEmitter<string>();

  onClick() {
    this.tabSelected.emit(this.tabName);
  }
}
