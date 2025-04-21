import { Component, OnInit, Input } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})

export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  constructor() { }

  ngOnInit(): void {
    this.results = this.locationList;
  }

  searchHousingLocations(searchText: string) {
    console.log(searchText);
    if (!searchText) {
      this.results = this.locationList;
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
}
