import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { LoginService } from '../basic/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private book:BooksService,private log:LoginService,private router:ActivatedRoute,private route:Router) { 
    }

  ngOnInit() {
    const param=this.router.snapshot.params.id;
    if(!this.log.checkParams(param)){
      
      this.route.navigate(["invalid"]);
    }
  
  }

}
