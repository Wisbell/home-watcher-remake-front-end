import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDto } from '../user.dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  private user: User;
  private getUserEndpoint: string = 'http://localhost:3000/users';

  public userForm: FormGroup = this.formBuilder.group({
    id: new FormControl({ value: '', disabled: true }),
    username: new FormControl({ value: '', disabled: true}),
    role: new FormControl()
  })

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUserEndpoint = `${this.getUserEndpoint}/${id}`
    this.setUp();
  }

  async onSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }

    const { id, username, role } = form.getRawValue();
    const userToUpdate: User = new UserDto(id, username, role).toUser();

    await this.userService.updateUser(
      this.user.id,
      userToUpdate
    );

    this.router.navigate(['/users']);
  }

  async getUser() {
    await this.httpClient.get(this.getUserEndpoint).toPromise()
    .then( (data) => {
      const theUser = data as User;
      this.user = theUser;
    });
  }

  async setUp() {
    await this.getUser();
    const { id, username, role } = this.user;
    this.setUserForm(new UserDto(id, username, role));
  }

  setUserForm(userDto: UserDto) {
    this.userForm.setValue({
      id: userDto.id,
      username: userDto.username,
      role: userDto.role
    })
  }

}
