import { Injectable } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
users:any=[
    {
      username:"admin",
      password:"admin"
    },{
      username:"himanshu",
      password:"joshi"
    }
]
  constructor() {
 
   }

   addUser(username,pass,copass ){
      if(pass!==copass){
        return 1;
      }
      else if(username.length < 4 || pass.length < 4)
      {
        return 2;
      }else{
        
    
        for(let item of this.users){
          if(item.username==username){
            return 3;
          } 
        }  

         this.users.push({username:username,password:pass});
         
         return 4;

    
    }
   }

  login(user,pass){
        this.users.forEach((item)=>{
          if(item.username===user && item.password===pass){
            return sessionStorage.setItem("user",user);
           
          }

      })
         
    }

  isLogin(user){

    let session:String=sessionStorage.getItem("user");
    
    if(session===user){
      return true;
    }
  return false;
  }

  anyLogin(){
    if(sessionStorage.getItem("user")!=null){
      return true;
    }
    return false;
  }

  logout(){

    sessionStorage.removeItem("user")
      return true;
  }

  getAllUser(){
      return this.users;
  }

  findUserById(user){
    this.users.forEach(function(item){
        if(item.username===user){
          return item;
        }
    })



  return null;
    }

checkParams(user){
  for(let item of this.users){
    if(item.username==user){
        return true;
    }
  }
  return false;
}



}
