import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusTimesService } from '../../services/bus-times.service';

interface BusFrequency {
  bus: string;
  timeToArrive: string;
  destiny: string;
  order: number;
}

interface BusInfo {
  busStop: number;
  title: string;
  frequencies: BusFrequency[];
  error: string | null;
}

/**
 * Main component for displaying bus times at a specific stop
 * Migrated from AngularJS main.component.js
 */
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  busInfo: BusInfo = {
    busStop: 0,
    title: '',
    frequencies: [],
    error: null
  };

  inProgress = false;

  constructor(private busTimesService: BusTimesService) {}

  ngOnInit(): void {
    // Initialize component
  }

  async getBusTimeTable(): Promise<void> {
    if (!this.busInfo.busStop || this.busInfo.busStop < 1) {
      return;
    }

    this.setProgressOn();

    try {
      const data = await this.busTimesService.getBusTimes(this.busInfo.busStop.toString());
      this.busInfo = {
        ...this.busInfo,
        title: data.title,
        frequencies: data.frequencies,
        error: data.error
      };
    } catch (error) {
      this.busInfo.error = 'Error desconocido';
    } finally {
      this.setProgressOff();
    }
  }

  getDistanceClass(timeToArrive: string): string {
    const parts = timeToArrive.split(' ');
    const minutes = parseInt(parts[0], 10);

    if (isNaN(minutes) || minutes < 2 || timeToArrive === 'En la parada') {
      return 'distance1';
    } else if (minutes < 5) {
      return 'distance2';
    } else {
      return 'distance3';
    }
  }

  private setProgressOn(): void {
    this.inProgress = true;
  }

  private setProgressOff(): void {
    this.inProgress = false;
  }
}
