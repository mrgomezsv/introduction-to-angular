import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
  results: HousingLocation[] = [];

  constructor() { }

  ngOnInit(): void {
    // No inicializamos results aquí para que no se muestren resultados inicialmente
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) {
      this.results = []; // Si no hay texto de búsqueda, no mostramos resultados
      return;
    }
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
      .toLowerCase()
      .includes(
        searchText.toLowerCase()
      )
    );
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
}
