import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../basic/login.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  home(){
    if(sessionStorage.getItem("user")!=null){
      this.route.navigate([`galary/${sessionStorage.getItem("user")}`])
    }else{
      this.route.navigate(["login"])
    }
  }

}
