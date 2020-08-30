import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lat = 29.269676;
  lng = 77.729979;
  zoom: number = 15;
}
