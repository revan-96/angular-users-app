import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { IUser } from '../interface/iuser.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  _users: IUser[] = [];
  constructor(private userService: UsersService,
              private router: Router) { }

  getUserID(user: IUser): number {
    return user.id;
  }

  getUserName(user: IUser): string {
    return user.first_name;
  }

  get users(): IUser[] {
    return this._users.sort((a,b) => a.first_name.localeCompare(b.first_name))
  }

  userChanged(e: any) {
    console.log(e);
    this.router.navigate(['/users/' + e.value])

  }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(data => this._users = data);
  }



}
