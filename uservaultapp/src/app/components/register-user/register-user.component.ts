
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/interfaces/Role';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  
  user: User = {
    userName: "",
    password: "",
    email: "",
    dataNascita: null,
    roles: null,
    vault: null
  };


  constructor(private userService: UserService) { }

  ngOnInit(): void {}

  userRegister(): void{
    this.userService.registerUser(this.user).subscribe();
  }
}
