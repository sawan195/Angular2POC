import { Component, OnInit,  ViewContainerRef, ViewChild } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {userServices} from "../services";
import {PopUpComponent} from "../pop-up/pop-up.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userId : number;
  allUsers = [];
  messages = [];

  public constructor(private route: ActivatedRoute, private userService: userServices,viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.getMessages();

    });
  }

  private viewContainerRef: ViewContainerRef;

  @ViewChild(PopUpComponent)
  public childComponent: PopUpComponent;

  private openModal(){
    this.childComponent.showChildModal();
  }


  getUsers() {
    var userData = {
      userId : this.userId
    };
    this.userService.getUserInfoById(userData)
      .subscribe(
        data =>  {
          console.log(data);
        },
        error => "Something is wrong"
      );
  }

  getMessages() {
    this.userService.getMessagesById(this.userId)
      .subscribe(
        data =>  {
          this.messages = data;
          console.log(data);
        },
        error => "Something is wrong"
      );
  }

}
