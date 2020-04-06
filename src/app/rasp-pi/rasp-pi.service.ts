import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaspPiService {

  constructor() { }

  getApiStatus() {
    // query ping/pong endpoint
  }

  getCameraStatus() {
    // create camera endpoint to check if online
  }
}
