import {Injectable} from "@angular/core"
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Http} from "@angular/http";

@Injectable()
export class userServices{

  endpoint_url:String = "http://localhost:8000/api";

  constructor(private http: Http){
    this.http = http;
  }

  getAllUsers (): Observable <any>{
    return this.http.get(this.endpoint_url + '/getUsers').map(res => res.json());
  }

  login (userDetails: any): Observable<any> {
    return this.http.post(this.endpoint_url + '/login', userDetails)
      .map(res => res.json());
  }

  signUp(userDetails: any): Observable<any> {
    return this.http.post(this.endpoint_url + '/signUp', userDetails)
      .map(res => res.json());
  }

}
