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

  async getAllPictures(): Promise<Image[]> {
    const images: Image[] = await this.httpClient
      .get(`${this.imageApiUrl}`)
      .toPromise()
      .then( (users) => users as Image[]);

    return images;
  }

  // async getUser(id: string): Promise<User> {
  //   const user: User = await this.httpClient
  //     .get(`${this.userApiUrl}/${id}`)
  //     .toPromise()
  //     .then( (user) => user as User);

  //   return user;
  // }

  // // Create User
  // async createUser(newUser: User): Promise<User> {
  //   throw new Error('Not Implemented');

  //   const savedUser: User = await this.httpClient
  //   .post(`${this.userApiUrl}}`, newUser)
  //   .toPromise()
  //   .then( (user) => user as User);

  // return savedUser;
  // }

  // // Update User
  // async updateUser(id: string, updatedUser: User): Promise<User> {
  //   const savedUser: User = await this.httpClient
  //     .put(`${this.userApiUrl}/${id}`, updatedUser)
  //     .toPromise()
  //     .then( (user) => user as User);

  //   return savedUser;
  // }

  // Delete User
  async deleteImage(id: string): Promise<void> {
    await this.httpClient
      .delete(`${this.imageApiUrl}/${id}`)
      .toPromise();
  }
}
