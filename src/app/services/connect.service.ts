import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/toPromise';


@Injectable()

export class connectService {
    
    
  private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    users(data) {
        return this.http.post("http://localhost:5000/api/user/", data);
        // .subscribe(res => console.log(res));    
    }
    usersregistration(data) {
        return this.http.put("http://localhost:5000/api/user", data);
        // .subscribe(res => console.log(res));    
    }

  
    products(data){
        return this.http.post("http://localhost:5000/api/products/",data);
    }
}