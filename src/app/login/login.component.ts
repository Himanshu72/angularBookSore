import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../basic/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:String;
  pass:String
  loginsucc:boolean;
  loginfail:boolean;
  constructor(private router:Router,private log:LoginService) { 
   
  }

  ngOnInit() {
  }

  login(){
    this.log.login(this.user,this.pass)
    if(this.log.isLogin(this.user)){
      this.loginfail=false; 
      this.router.navigate([`galary/${this.user}`]);
      
    }else{
      this.loginfail=true;
    }
    
    
  }
}
