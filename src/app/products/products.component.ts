import { Products } from './../products';
import { PRODUCTS } from './../mock-products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  selectedProduct: Products;

  constructor() { }

  onSelect(prdt: Products) : void{
   this.selectedProduct = prdt;
  }
  ngOnInit(): void {
  }

}
