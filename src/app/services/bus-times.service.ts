import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, firstValueFrom, takeUntil } from 'rxjs';

interface BusTime {
  bus: string;
  timeToArrive: string;
  destiny: string;
  order: number;
}

interface BusTimesData {
  error: string | null;
  title: string;
  frequencies: BusTime[];
}

interface YahooResponse {
  query: {
    results: {
      json: {
        title: string;
        items: Array<{
          json: [string, string];
        }>;
      };
    };
  };
}

/**
 * Service to fetch bus arrival times from Yahoo Query API
 * Migrated from AngularJS BusTimesGetter service
 */
@Injectable({
  providedIn: 'root'
})
export class BusTimesService {
  private cancelRequest$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  /**
   * Fetch bus times for a specific bus stop
   * @param busStopNumber The bus stop number to query
   * @returns Promise with bus times data
   */
  async getBusTimes(busStopNumber: string): Promise<BusTimesData> {
    // Cancel any pending request
    this.cancelRequest$.next();
    this.cancelRequest$.complete();
    this.cancelRequest$ = new Subject<void>();

    const url = `http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20` +
      `url%3D%22http%3A%2F%2Fwww.dndzgz.com%2Fpoint%3Fid%3D${busStopNumber}%26service%3Dbus%22%20` +
      `&format=json&callback=`;

    try {
      const response = await firstValueFrom(
        this.http.get<YahooResponse>(url, {
          headers: { 'Accept': 'application/json' }
        }).pipe(takeUntil(this.cancelRequest$))
      );

      return this.wrapResponse(response);
    } catch (error) {
      // Request was cancelled or failed
      return {
        error: 'Error desconocido',
        title: '',
        frequencies: []
      };
    }
  }

  private wrapResponse(data: YahooResponse): BusTimesData {
    const wrappedData: BusTimesData = {
      error: null,
      title: '',
      frequencies: []
    };

    try {
      wrappedData.title = data.query.results.json.title;

      data.query.results.json.items.forEach(item => {
        const firstLine = item.json[0];
        const matches = firstLine.match(/\S(\d+)\S\s(.*)/);

        if (matches) {
          const nextBusInfo: BusTime = {
            bus: matches[1],
            timeToArrive: matches[2],
            destiny: item.json[1],
            order: 0
          };

          const parts = nextBusInfo.timeToArrive.split(' ');
          const minutes = parseInt(parts[0], 10);
          nextBusInfo.order = isNaN(minutes) ? 0 : minutes;

          wrappedData.frequencies.push(nextBusInfo);
        }
      });
    } catch (e) {
      wrappedData.error = 'Error desconocido';
    }

    return wrappedData;
  }
}
