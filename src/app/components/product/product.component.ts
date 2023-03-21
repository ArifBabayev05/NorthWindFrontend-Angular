import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;
  filterText = "";

  constructor(private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductByCategory(params["categoryId"]);
      }
      else {
        this.getProduct();
      }
    })
  }

  getProduct() {
    this.productService.getProduct().subscribe((res) => {
      this.products = res.data;
      this.dataLoaded = true;
    })
  }

  getProductByCategory(categoryId: number) {
    this.productService.getProductsByCategoryId(categoryId).subscribe((res) => {
      this.products = res.data;
      this.dataLoaded = true;
    })
  }
}
