export class User {
  constructor()
  constructor(
    username: string,
    password: string
  )
  constructor(
    username?: string,
    password?: string
  ) {
    this.username = username;
    this.password = password;
  }

  id: string;
  username: string;
  password: string;
  salt: string;
  role: string; // admin | basic
}
