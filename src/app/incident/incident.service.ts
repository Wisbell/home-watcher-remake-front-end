import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IncidentDto } from './incident.dto';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private incidentApiUrl = `${environment.apiUrl}/incidents`;

  async getAll(): Promise<IncidentDto[]> {
    const incidents: IncidentDto[] = await this.httpClient
      .get(`${this.incidentApiUrl}`)
      .toPromise()
      .then( (indcidents) => indcidents as IncidentDto[]);

    return incidents;
  }

  async get(id: string): Promise<IncidentDto> {
    const incident: IncidentDto = await this.httpClient
      .get(`${this.incidentApiUrl}/${id}`)
      .toPromise()
      .then( (incident) => incident as IncidentDto);

    return incident;
  }

  async create(newIncident: IncidentDto): Promise<IncidentDto> {
    const savedIncident: IncidentDto = await this.httpClient
    .post(`${this.incidentApiUrl}`, newIncident)
    .toPromise()
    .then( (incident) => incident as IncidentDto);

    return savedIncident;
  }

  async update(id: string, updatedIncident: IncidentDto): Promise<IncidentDto> {
    const savedIncident: IncidentDto = await this.httpClient
      .put(`${this.incidentApiUrl}/${id}`, updatedIncident)
      .toPromise()
      .then( (incident) => incident as IncidentDto);

    return savedIncident;
  }

  async delete(id: string): Promise<void> {
    await this.httpClient
      .delete(`${this.incidentApiUrl}/${id}`)
      .toPromise();
  }
}
