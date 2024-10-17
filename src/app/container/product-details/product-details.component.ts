import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
product:Product;
}
