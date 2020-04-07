import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RaspPiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private raspPiServerUrl = 'http://192.168.1.8:3001';

  async getApiStatus(): Promise<string> {
    return await this.httpClient
      .get(`${this.raspPiServerUrl}/ping`, { responseType: 'text' })
      .toPromise()
      .then( pongString => {
        if (pongString === 'pong')
          return 'online';
        else
          return 'offline';
      })
      .catch( error => {
        console.log('error', error);
        return 'offline'
      });
  }

  async getCameraStatus(): Promise<string> {
    return await this.httpClient
      .get(`${this.raspPiServerUrl}/camera-status`, { responseType: 'text' })
      .toPromise()
      .then( cameraStatus => {
        console.log('camera', cameraStatus)
        if (cameraStatus === 'online')
          return 'online';
        else
          return 'offline';
      })
      .catch( error => {
        console.log('error', error);
        return 'offline'
      });
  }
}
