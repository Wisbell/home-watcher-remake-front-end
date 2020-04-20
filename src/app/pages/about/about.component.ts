import { Component, OnInit } from '@angular/core';
import { SeederService } from '../../seeder/seeder.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private seederService: SeederService
  ) { }

  ngOnInit(): void {
  }

  resetDatabase():void {
    this.seederService.resetDatabase();
  }
}
