import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        let id = params.get("productId")
      if(id !== null){ //Überprüfen ob id !== null, sonst Compiler fehler
        this.product = products[+id]
      }
        // this.product = id ? products[+id] : “” //Ternary Operator
    });
    console.log(this.product)
  }

}
