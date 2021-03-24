import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-lsit',
  templateUrl: './product-lsit.component.html',
  styleUrls: ['./product-lsit.component.scss']
})
export class ProductLsitComponent implements OnInit {

  products=products;
  constructor() {}

  ngOnInit(): void {}

}
