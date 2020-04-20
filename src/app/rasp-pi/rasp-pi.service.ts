import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RaspPiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async getApiStatus(): Promise<string> {
    return await this.httpClient
      .get(`${environment.raspPiUrl}/ping`, { responseType: 'text' })
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
      .get(`${environment.raspPiUrl}/camera-status`, { responseType: 'text' })
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

  async startCamera(): Promise<string> {
    return await this.httpClient
      .get(`${environment.raspPiUrl}/security/start`, { responseType: 'text' })
      .toPromise()
      .then( cameraStartedBool => {
        console.log('cameraStartedBool', cameraStartedBool)
        if (cameraStartedBool)
          return 'online';
        else
          return 'offline';
      })
      .catch( error => {
        console.log('error', error);
        return 'offline'
      });
  }

  async stopCamera(): Promise<string> {
    return await this.httpClient
      .get(`${environment.raspPiUrl}/security/stop`, { responseType: 'text' })
      .toPromise()
      .then( cameraStoppedBool => {
        console.log('cameraStoppedBool', cameraStoppedBool)
        if (cameraStoppedBool)
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
