import { routes } from './../app.router';
import { connectService } from './../services/connect.service';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { User } from './../entities/user.entity';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css'],
  providers:[connectService]
})
export class UserregistrationComponent implements OnInit {



    form=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmpassword:new FormControl('',Validators.required)

    
  });
  

  user: User;
  constructor(private service:connectService,private router:Router) { 
    this.user = new User();
    
 
  }

  ngOnInit() {
  }
  userReg(){
 
    console.log(this.user);

    var body = {
      data: this.user
    }
   
    this.service.usersregistration(body).subscribe(response=>{
      console.log(response);
      let m=response.json();  


      if(m.status==true){
        this.router.navigate(['/dashboard/users']);

      }
      else{
        // this.router.navigate(['./.']);
      }
      


    })

  
}
}
