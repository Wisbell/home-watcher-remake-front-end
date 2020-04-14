// TODO: Add error handling?

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private userApiUrl = `${environment.apiUrl}/users`;

  async getAllUsers(): Promise<User[]> {
    const users: User[] = await this.httpClient
      .get(`${this.userApiUrl}`)
      .toPromise()
      .then( (users) => users as User[]);

    return users;
  }

  async getUser(id: string): Promise<User> {
    const user: User = await this.httpClient
      .get(`${this.userApiUrl}/${id}`)
      .toPromise()
      .then( (user) => user as User);

    return user;
  }

  // Create User
  async createUser(newUser: User): Promise<User> {
    throw new Error('Not Implemented');

    const savedUser: User = await this.httpClient
    .post(`${this.userApiUrl}}`, newUser)
    .toPromise()
    .then( (user) => user as User);

  return savedUser;
  }

  // Update User
  async updateUser(id: string, updatedUser: User): Promise<User> {
    const savedUser: User = await this.httpClient
      .put(`${this.userApiUrl}/${id}`, updatedUser)
      .toPromise()
      .then( (user) => user as User);

    return savedUser;
  }

  // Delete User
  async deleteUser(id: string): Promise<User> {
    const deletedUser: User = await this.httpClient
      .delete(`${this.userApiUrl}/${id}`)
      .toPromise()
      .then( (user) => user as User);

    return deletedUser;
  }
}
