import { FormGroup,FormControl,ReactiveFormsModule,Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
hide=true;


form=new FormGroup({
  email:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required)
  
});

  constructor() { }

  ngOnInit() {
  }

}
