import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../incident.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Incident } from '../incident.model';
import { SecurityService } from '../../security/security.service';
import { Image } from '../../security/image.model';
import { IncidentDto } from '../incident.dto';

@Component({
  selector: 'app-incident-create',
  templateUrl: './incident-create.component.html',
  styleUrls: ['./incident-create.component.scss']
})
export class IncidentCreateComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private incidentService: IncidentService,
    private securityService: SecurityService,
  ) { }

  public imageId: string;
  public incidentImage: Image;

  public incidentForm: FormGroup = this.formBuilder.group({
    text: new FormControl()
  })

  ngOnInit(): void {
    this.setUp();
  }

  async onSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }

    const { text } = form.getRawValue();

    const newIncident: IncidentDto = new IncidentDto(undefined, text, undefined, this.imageId);

    const savedIncident = await this.incidentService.create(newIncident);

    console.log('savedIncident', savedIncident);

    this.router.navigate(['/incidents']);
  }

  async getImage() {
    await this.securityService.getImage(this.imageId)
    .then( (data) => {
      const theImage = data as Image;
      this.incidentImage = theImage;
    });
  }

  async setUp() {
    this.imageId = this.route.snapshot.paramMap.get('id');
    this.getImage();
  }
}
