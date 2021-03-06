// TODO: Change to use service instead of direct call to api

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { IncidentService } from '../incident.service';
import { IncidentDto } from '../incident.dto';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-incident-edit',
  templateUrl: './incident-edit.component.html',
  styleUrls: ['./incident-edit.component.scss']
})
export class IncidentEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private incidentService: IncidentService
  ) { }

  private incident: IncidentDto;
  private incidentId: string;
  // private getIncidentEndpoint: string = `${environment.apiUrl}/incidents`;

  public incidentForm: FormGroup = this.formBuilder.group({
    id: new FormControl({ value: '', disabled: true }),
    dateCreated: new FormControl({ value: '', disabled: true}),
    imageId: new FormControl({ value: '', disabled: true}),
    text: new FormControl(),
  })

  ngOnInit(): void {
    this.incidentId = this.route.snapshot.paramMap.get('id');
    console.log('this.incidentId', this.incidentId);
    // this.getIncidentEndpoint = `${this.getIncidentEndpoint}/${this.incidentId}`;
    // console.log('this.getIncidentEndpoint', this.getIncidentEndpoint);
    this.setUp();
  }

  async onSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }

    const { id, dateCreated, imageId, text } = form.getRawValue();
    const incidentToUpdate: IncidentDto = new IncidentDto(
      id, text, dateCreated, imageId
    );

    await this.incidentService.update(
      this.incident.id,
      incidentToUpdate
    );

    this.router.navigate(['/incidents']);
  }

  async getIncident() {
    await this.incidentService.get(this.incidentId)
    .then( (data) => {
      const theIncident = data as IncidentDto;
      this.incident = theIncident;
    });
  }

  async setUp() {
    await this.getIncident();
    const { id, dateCreated, text, imageId } = this.incident;
    this.setUserForm(new IncidentDto(id, text, dateCreated, imageId));
  }

  setUserForm(incidentDto: IncidentDto) {
    this.incidentForm.setValue({
      id: incidentDto.id,
      dateCreated: incidentDto.dateCreated,
      text: incidentDto.text,
      imageId: incidentDto.imageId,
    })
  }
}
