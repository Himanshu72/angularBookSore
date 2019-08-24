import { Injectable } from '@angular/core';
import { LoginService } from './basic/login.service';
import { CanActivate,Router,RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AntiLogService {
  constructor(private log:LoginService,private route:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
          if(this.log.anyLogin()){
            return false;
          
          }else{
            
            return true;
          }
  }
}
