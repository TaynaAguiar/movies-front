import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  listUsers: any;
  user: any;
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((data) => {
      this.listUsers = data;
      console.log('listUsers', this.listUsers);
    });
  }

  deleteUsers(userId: any) {
    this.usersService.deleteUsers(userId).subscribe((data) => {
      alert('User delete successfully');
      setTimeout(() => {
        location.reload();
      }, 500);
      console.log('deu certo');
    });
  }
}
