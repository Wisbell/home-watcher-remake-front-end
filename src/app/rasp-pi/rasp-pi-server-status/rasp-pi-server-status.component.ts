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

  async ngOnInit(): Promise<void> {
    this.raspPiApiStatus = await this.raspPiService.getApiStatus();
    this.raspPiCameraStatus = await this.raspPiService.getCameraStatus();
  }
}
