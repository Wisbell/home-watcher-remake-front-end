import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { IncidentService } from '../incident.service';
// import { Incident } from '../incident.model';
import { IncidentDto } from '../incident.dto';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private incidentService: IncidentService,
  ) { }

  incidents: IncidentDto[];

  ngOnInit(): void {
    this.getAllIncidents();
  }

  getAllIncidents() {
    this.incidentService.getAll()
    .then( (data) => {
      console.log('data', data);
      const theIncidents = data as IncidentDto[];
      this.incidents = theIncidents;
    });
  }

  async deleteIncident(id: string) {
    var result = confirm("Are you sure you want to delete this incident?");
    if (result) {
      await this.incidentService.delete(id);
      this.getAllIncidents();
    }
  }
}
