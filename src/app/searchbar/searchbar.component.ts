import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Output() searchTown = new EventEmitter<string>();

  onSearch(town: string): void {
    this.searchTown.emit(town);
  }
}
