import { Component, OnInit } from '@angular/core';
import  { LoginService } from '../basic/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
login:boolean;
logout:boolean
  constructor(private log: LoginService,private router:Router) { 
      
   
  }

  logoutnow(){
    
    this.log.logout();
  
    this.router.navigate(["login"]);
    this.refreshnav();  
  }

   loginnow(){
    
    this.router.navigate(["login"]);
    this.refreshnav();
  } 
  ngOnInit() {
    
    this.refreshnav();
  }

  refreshnav(){
    if(this.log.anyLogin()){
      this.logout=true;
      this.login=false;  
  }else{
    this.login=true;
    this.logout=false;
  }
  }

 goCart(){
  this.router.navigate([`cart/${sessionStorage.getItem("user")}`])
 } 
 dash(){
  this.router.navigate([`galary/${sessionStorage.getItem("user")}`])
 }

 goHistory(){
  this.router.navigate([`history/${sessionStorage.getItem("user")}`])
 }


}
