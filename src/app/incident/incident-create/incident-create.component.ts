import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../../security/security.service';
import { Image } from '../../security/image.model';
import { IncidentService } from '../incident.service';
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

    await this.incidentService.create(newIncident);

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
