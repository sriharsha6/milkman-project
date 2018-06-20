import { connectService } from './../services/connect.service';
import { userspost } from './../entities/userspost.entity';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[connectService]
})
export class UsersComponent implements OnInit {

  user:userspost;
//  users:any;
 details:any;
 
  constructor(private service:connectService) {
var data;


// this.user=new userspost();
// console.log(this.user);

    this.service.users(data).subscribe(response=>{
      // console.log(response);
      
      let m=response.json();
      this.details=m.data;
     
    
    });
 
   }

  ngOnInit() {

 
}
}
