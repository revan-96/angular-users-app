import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../interface/iuser.interface';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: IUser;
  constructor(private userService: UsersService,
              private route: ActivatedRoute) { }

  get firstName(): string {
    return this.user.first_name;
  }

  get lastName(): string {
    return this.user.last_name;
  }

  get DOB(): string {
    return new Date(this.user.dob).toDateString();
  }

  get Email(): string {
    return this.user.email;
  }

  get Phone(): string {
    return this.user.phone;
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUsersByID(id).then(data => {
      this.user = data;
    })
  }
}
