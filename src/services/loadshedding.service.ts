import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoadsheddingService {

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  public apiResponse: boolean = true;

  constructor(private http: HttpClient) { }

  getLoadSheddingSchedule(place: string): Observable<any> {
    const url = `${this.apiUrl}/schedule/${place}`;

    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'mzansi-loadshedding-api.p.rapidapi.com'
    });

    return this.http.get(url, { headers });
  }

}
