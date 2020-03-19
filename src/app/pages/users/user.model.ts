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

  userId: number;
  username: string;
  password: string;
  role: string; // admin | basic
}
