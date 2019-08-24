import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import Swal from "sweetalert2"
import { ActivatedRoute, Router } from '@angular/router';
import {LoginService} from "../basic/login.service"
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private book:BooksService,private router:ActivatedRoute,private log:LoginService,private route:Router ) {
     
   }

  ngOnInit() {
    const param=this.router.snapshot.params.id;
    if(!this.log.checkParams(param)){
      
      this.route.navigate(["invalid"]);
    }
  
  }

  buy(id){
    this.book.addBuy(id)
    Swal.fire("Well done","sucessfully Buyed item","success")
  }
  buyAll(){
    this.book.addAllBuy()
    Swal.fire("Well done","sucessfully Buyed all item in cart ","success")
  }

  delete(id){
    this.book.deleteCart(id);
    Swal.fire("Great","sucessfully Deleted item from cart","info")
  }
  deleteAll(){
    this.book.deleteAllCart();
    Swal.fire("Great","sucessfully Deleted all the item from cart","info")
  }

}
