import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguagesService } from '../services/languages.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent implements OnInit {
  postUsers!: FormGroup;
  listLanguages: any;
  userId: any;
  user: any;

  constructor(
    private fb: FormBuilder,
    private userservice: UsersService,
    private languagesService: LanguagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    console.log('route', this.route.snapshot.params['id']);

    this.postUsers = this.route.snapshot.params['movies-users-register'];

    console.log('route', this.route.snapshot.params['movies-users-register']);

    this.postUsers = this.fb.group({
      id: [''],
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      cpf: ['', Validators.compose([Validators.required])],
      cellPhone: [
        '',
        [
          Validators.required,
        ],
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      profile: ['', [Validators.required]],
      language: ['', [Validators.required]],
    });
    
    
    this.getById();
    this.postUser();
    this.putUsers();
    this.getLanguages();
  }

  postUser() {
    this.userservice.postUsers(this.postUsers.value).subscribe((data) => {
      this.postUsers = data;
      alert('User created successfully!');
      setTimeout(() => {
        this.router.navigate(['']);
      }, 1500);
      console.log('postUsers', this.postUsers);
    });
  }

  getLanguages() {
    this.languagesService.getLanguages().subscribe((data) => {
      this.listLanguages = data;
      console.log('listLanguages', this.listLanguages);
    });
  }

  getById() {
    this.userservice.getById(this.userId).subscribe((data) => {
      this.user = data;
      this.postUsers.patchValue(this.user);
      console.log('user', this.user);
    });
  }

  putUsers() {
    this.userservice
      .putUsers(this.userId, this.postUsers.value)
      .subscribe((data) => {
        this.userId, (this.postUsers = data);
        alert('User edited successfully');
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1500);
        console.log('postusers', this.postUsers);
      });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
