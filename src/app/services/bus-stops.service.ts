import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, lastValueFrom } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

export interface BusStopData {
  geoPoints: any[];
  error: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class BusStopsService {
  private currentQuery$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  callWebService(busStopNumber?: number): Promise<BusStopData> {
    const url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20' +
      'url%3D%22http%3A%2F%2Fwww.dndzgz.com%2Ffetch%3Fservice%3Dbus%22' +
      '&format=json' +
      '&diagnostics=true' +
      '&callback=';

    // Cancel previous request if exists
    this.currentQuery$.next();

    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return lastValueFrom(
      this.http.get<any>(url, { headers })
        .pipe(
          takeUntil(this.currentQuery$),
          map(response => this.wrapResponse(response))
        )
    );
  }

  private wrapResponse(data: any): BusStopData {
    const wrappedData: BusStopData = {
      geoPoints: [],
      error: null
    };

    try {
      if (data?.query?.results?.json?.json) {
        wrappedData.geoPoints = [...data.query.results.json.json];
      }
    } catch (e) {
      wrappedData.error = 'Error desconocido';
    }

    return wrappedData;
  }
}
