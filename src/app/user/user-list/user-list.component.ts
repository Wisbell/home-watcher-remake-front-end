// TODO: Add error handling if failed getting users?
// TODO: Add images to user model

import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[];

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers()
    .then( (data) => {
      console.log('data', data);
      const theUsers = data as User[];
      this.users = theUsers;
    });
  }

  async deleteUser(id: string) {
    var result = confirm("Are you sure you want to delete this user?");
    if (result) {
      const deletedUser = await this.userService.deleteUser(id);
      console.log('user deleted', deletedUser);
      this.getAllUsers();
    }
  }
}
