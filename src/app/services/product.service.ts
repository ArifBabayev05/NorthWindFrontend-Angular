import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:20232/api/"

  constructor(private httpClient:HttpClient) { }

  getProduct():Observable<ListResponseModel<Product>>{
    let newPath =this.apiUrl + "product/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getProductsByCategoryId(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath =this.apiUrl + "product/getbycategoryid?categoryid=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
}
