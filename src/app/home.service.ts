import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor() { }
  getRentals(){
    return [
      {img:'../assets/images/home1.jpg', name:'House 1',  price:'$200'},
      {img:'../assets/images/home2.jpg', name:'House 2',  price:'$200'},
      {img:'../assets/images/home3.jpg', name:'House 3',  price:'$200'},
      {img:'../assets/images/home4.jpg', name:'House 4',  price:'$205'},
      {img:'../assets/images/home5.jpg', name:'House 5',  price:'$205'}
    ]
  }
}
