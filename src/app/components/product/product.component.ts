import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from "@angular/common/http"
import { productResponceModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  apiUrl = "https://localhost:20232/api/product/getall"
  productResponseModel : productResponceModel={
    data:this.products,
    success:true,
    message: ""
  }

  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.httpClient.get<productResponceModel>(this.apiUrl)
    .subscribe((res)=>{
      this.products = res.data;
    })
  }
}
