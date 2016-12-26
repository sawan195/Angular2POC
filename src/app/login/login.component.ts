import { Component } from '@angular/core';
import {userServices} from "../services";
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  register : boolean = false;
  allUsers = [];
  user = {};
  myForm: FormGroup;
  loggedInUserId = "";

  constructor(private formbuilder: FormBuilder,private userService: userServices, private router:Router) {
    /*this.myForm = new FormGroup({
     'userData': new FormGroup({
     'username': new FormControl('Anjali', Validators.required),
     'email': new FormControl('anjali@gmail.com', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")])
     }),
     'password': new FormControl('', Validators.required),
     'gender': new FormControl('male'),
     'hobbies': new FormArray([
     new FormControl('Cooking', Validators.required)
     ])
     });
     */
    this.myForm = formbuilder.group({
      'firstName': ['',Validators.required],
      'lastName': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
    });
  }

  showRegister(){
    this.register = true;

  }

  showLogin() {
    this.register = false;
  }


  login(userDetails){
    console.log(userDetails);
    this.userService.login(userDetails)
      .subscribe(
        data =>  {
          console.log(data);
          this.loggedInUserId = data.id;
          alert(data.message);
          this.router.navigate(['/dashboard',this.loggedInUserId]);
        },
        error => "Something is wrong"
      );
  }

  onSubmit(userDetails) {
    console.log(userDetails);
    this.userService.signUp(userDetails)
      .subscribe(
        data =>  {
          console.log(data);
          alert(data.message);
          this.reset();
        },
        error => "Something is wrong"
      );
  }

  reset() {
    this.myForm.reset();
  }



}
