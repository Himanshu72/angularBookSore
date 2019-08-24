import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service'
import Swal from "sweetalert2"
import { ActivatedRoute,Router } from '@angular/router';
import { LoginService } from '../basic/login.service';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

qty:number[];
  constructor(private books:BooksService,private router:ActivatedRoute,private route:Router,private log:LoginService) {
    this.qty=new Array(books.getBookLength()).fill(1)
   }


  ngOnInit() {
    const param=this.router.snapshot.params.id;
    if(!this.log.checkParams(param)){
      
      this.route.navigate(["invalid"]);
    }
  
  }
 add(id){
   
   this.qty[id]++;
 }
 minus(id){
  if(this.qty[id]>1)
  this.qty[id]--;
 }

 cart(id){
  
   this.books.addCart(id,this.qty[id]);
    Swal.fire("Well done","item sucessfully added in cart","success")
 }
  
}
