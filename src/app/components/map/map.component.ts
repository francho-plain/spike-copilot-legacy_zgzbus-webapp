import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusStopsService } from '../../services/bus-stops.service';

interface MapPoints {
  geoPoints?: any[];
  error?: string | null;
}

/**
 * Map component for displaying bus stops on a map
 * Migrated from AngularJS map.component.js
 */
@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  mapPoints: MapPoints = {};
  inProgress = false;

  constructor(private busStopsService: BusStopsService) {}

  ngOnInit(): void {
    this.getMapPoints();
  }

  async getMapPoints(): Promise<void> {
    this.setProgressOn();

    try {
      const data = await this.busStopsService.callWebService();
      this.mapPoints = data;
    } catch (error) {
      this.mapPoints = {
        error: 'Error loading map points'
      };
    } finally {
      this.setProgressOff();
    }
  }

  private setProgressOn(): void {
    this.inProgress = true;
  }

  private setProgressOff(): void {
    this.inProgress = false;
  }
}
