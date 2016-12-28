import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
//import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {

  //constructor
  constructor() { }

  @ViewChild('childModal') public childModal: ModalDirective;

  public showChildModal(): void {
    this.childModal.config.backdrop = false; // workaround
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
