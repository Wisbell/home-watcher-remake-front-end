import { User } from './user.model';

export class UserDto {
  constructor()
  constructor(
    id: string,
    username: string,
    role: string
  )
  constructor(
    id?: string,
    username?: string,
    role?: string,
  ) {
    this.id = id;
    this.username = username;
    this.role = role;
  }

  id: string;
  username: string;
  role: string; // admin | basic

  toUser(): User {
    let user = new User();
    user.id = this.id;
    user.username = this.username;
    user.role = this.role;
    user.password = undefined;
    user.salt = undefined;

    return user;
  }
}
