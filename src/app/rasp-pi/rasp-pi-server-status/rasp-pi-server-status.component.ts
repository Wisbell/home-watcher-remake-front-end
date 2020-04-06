import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rasp-pi-server-status',
  templateUrl: './rasp-pi-server-status.component.html',
  styleUrls: ['./rasp-pi-server-status.component.scss']
})
export class RaspPiServerStatusComponent implements OnInit {

  constructor() { }

  public raspPiApiStatus = 'offline';
  public raspPiCameraStatus = 'offline';

  ngOnInit(): void {
  }
}
