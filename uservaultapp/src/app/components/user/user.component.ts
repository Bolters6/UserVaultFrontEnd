import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    this.getUser();
    
  }
 
  getUser(): void{
    
    this.userService.getUser().subscribe(user => {this.user = user}, error => {alert(error.message)});
  }
}
