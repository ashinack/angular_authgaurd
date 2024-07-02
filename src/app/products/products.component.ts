import { Component } from '@angular/core';
import { AddProductComponent } from '../add-product/add-product.component';
import { ListProductsComponent } from '../list-products/list-products.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AddProductComponent, ListProductsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
