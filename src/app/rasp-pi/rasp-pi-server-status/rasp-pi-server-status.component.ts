import { Component, OnInit } from '@angular/core';
import { RaspPiService } from '../rasp-pi.service';

@Component({
  selector: 'app-rasp-pi-server-status',
  templateUrl: './rasp-pi-server-status.component.html',
  styleUrls: ['./rasp-pi-server-status.component.scss']
})
export class RaspPiServerStatusComponent implements OnInit {

  constructor(
    private raspPiService: RaspPiService
  ) { }

  public raspPiApiStatus = null;
  public raspPiCameraStatus = null;

  ngOnInit(): void {
    this.updateStatus();
  }

  async updateStatus(): Promise<void> {
    this.raspPiApiStatus = await this.raspPiService.getApiStatus();
    this.raspPiCameraStatus = await this.raspPiService.getCameraStatus();
  }

  async startCamera(): Promise<void> {
    console.log('startCamera clicked!');
    await this.raspPiService.startCamera();
    this.updateStatus();
  }

  async stopCamera(): Promise<void> {
    console.log('stopCamera clicked!');
    await this.raspPiService.stopCamera();
    this.updateStatus();
  }
}
