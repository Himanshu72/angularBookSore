import { Injectable } from '@angular/core';

export class Buy{
  constructor(
    public id:number,
    public cartId:number,
    public Date:Date,
    public book:string,
    public QTY:number,
    public price:number
  ){}
}
export class Cart{
  constructor(
    public id:number,
    public itemId:number,
    public book:string,
    public QTY:number,
    public price:number 
  ){}

  }


@Injectable({
  providedIn: 'root'
})

export class BooksService {

private Buy:Buy[]=[
 
];
  private buy:any=[
  /*{
    id:1,
    Bid:1,
    Qtu:4
  }*/
]
cartId:number=0;
 cart:Cart[]=[

 ];

 
  private books:any=[
  {
    id:0,
    title:"computer awerness",
    img:"1.jpg",
    desc:""
    ,
    price:"500"
  },
  {
    id:1,
    title:"my digital world",
    img:"2.jpg",
    price:"400"
    
  },{
    id:2,
    title:"Computer Hardware course",
    img:"3.jpg",
    price:"310"  },{
    id:3,
    title:"tak off with computers ",
    img:"4.jpg",
    price:"530",
    desc:""
  },
  {
    id:4,
    title:"computer Decoded",
    img:"5.jpg",
    price:"510",
    desc:""
  }
];

buyId=0;
  constructor() {
    
   }



   isBuyEmpty(){
     if(this.Buy.length>0){
       return false;
     }
     return true;
   }
   isCartEmpty(){
  if(this.cart.length>0){
    return false;
  }else{
    return true;
  }
}

getAllBuy(){
  return this.Buy;
}

getCartById(id){
  for(let item of this.cart ){
    if(item.id==id){
      return item;
    }
  }


}

deleteCart(id){
  for(let x=0;x<this.cart.length;x++){
    if(this.cart[x].id==id)
     this.cart.splice(x,1);
   
    }
}

getQTY(){
  let QTY=0;
  for(let item of this.cart){
      QTY+=item.QTY;
  }

  return QTY;

}

getBuyQTY(){
  let QTY=0;
  for(let item of this.Buy){
      QTY+=item.QTY;
  }

  return QTY;

}

getBuyPrice(){
  let price=0;
  for(let item of this.Buy){
      price+= item.price;
  }
  return price;
}
getPrice(){
  let price=0;
  for(let item of this.cart){
      price+= item.price;
  }

  return price;

}

deleteAllCart(){
  this.cart.splice(0,this.cart.length)
}

addAllBuy(){
    for(let item of this.cart){
      this.Buy.push(new Buy(this.buyId,item.                                                                                                                                  id,new Date(),item.book,item.QTY,item.price));    
      this.buyId++;
    }

    this.deleteAllCart();
  
}

addBuy(id){

  let item=this.getCartById(id);
  if(item!=null){
    this.Buy.push(new Buy(this.buyId,id,new Date(),item.book,item.QTY,item.price));
    this.buyId++;
    this.deleteCart(id);
    
  }

  
}
   getAllCart(){
  return this.cart;
}
   getAllBooks(){
  return this.books;
}

findBookById(id){

for(let item of this.books){
    if(id==item.id){
      return item;
    }

}
  return null;
}
addCart(id,qty){
  
  let item=this.findBookById(id);
    this.cart.push(new Cart(this.cartId,id,item.title,qty,item.price * qty ) );
    this.cartId++;
  }

getBookLength(){
  return this.books.length;
}

}

