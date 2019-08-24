import { Component, OnInit } from '@angular/core';
import { LoginService } from '../basic/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
msg:string;
user:string;
pass:string;
copass:string;
err:boolean;
  constructor(private log:LoginService,private route:Router) { }

  ngOnInit() {
  }

  reg(){
    switch(this.log.addUser(this.user,this.pass,this.copass)){
      case 1:
          this.err=true;
          this.msg="password and confrim password must be same";
          break;

      case 2:
          this.err=true;
          this.msg="username and password must be grater then 3 char";
          break;
    
      case 3:
              this.err=true;
              this.msg="username must be unique try another";
              break;  
      case 4:
              this.err=false;
              this.msg="";
              this.route.navigate(["/login"]);
              break;  
    }
  }

}
