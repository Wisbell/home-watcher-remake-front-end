import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SeederService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private seederApiUrl = `${environment.apiUrl}/seeder`;

  async resetDatabase(): Promise<any> {
    console.log('seeder reset called!');

    await this.httpClient
      .get(`${this.seederApiUrl}/reset`)
      .toPromise()
      .then( (data) => console.log('reset', data));
  }
}
