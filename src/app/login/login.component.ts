import { Component } from '@angular/core';
import {userServices} from "../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  constructor(private userService: userServices) { }

  register : boolean = true;
  allUsers = [];
  user = {};

  public showRegister(){
    this.register = false;

  }

  getUsers(){
    this.userService.getAllUsers()
      .subscribe(
        data =>  {
          this.allUsers = data;
          console.log(this.allUsers);
        },
        error => "Something is wrong"
      );
  }

  login(userDetails){
    this.userService.login(userDetails)
      .subscribe(
        data =>  {
          console.log(data);
          alert(data.message);
        },
        error => "Something is wrong"
      );
  }


}
