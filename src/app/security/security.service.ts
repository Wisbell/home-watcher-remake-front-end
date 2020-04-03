import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private imageApiUrl = 'http://localhost:3000/images';

  async getAllImages(): Promise<Image[]> {
    const images: Image[] = await this.httpClient
      .get(`${this.imageApiUrl}`)
      .toPromise()
      .then( (users) => users as Image[]);

    return images;
  }

  async getImage(id: string): Promise<Image> {
    const image: Image = await this.httpClient
      .get(`${this.imageApiUrl}/${id}`)
      .toPromise()
      .then( (image) => image as Image);

    return image;
  }

  async deleteImage(id: string): Promise<void> {
    await this.httpClient
      .delete(`${this.imageApiUrl}/${id}`)
      .toPromise();
  }
}
