import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-dashboard',
 templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
keepsidenav:boolean;
 constructor() {
   // if(window.innerWidth > 579 ){
   //   this.keepsidenav=true;

   // }
 }

 ngOnInit() {
 }
 hidemenu(){
   this.keepsidenav=false;
 }
 showmenu(){
   // alert("hai")//
   this.keepsidenav=true;
 }

}
