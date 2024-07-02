import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      Id: ['', Validators.required],
      Title: ['', Validators.required],
      Price: [],
      inStock: [],
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productService.AddProduct(this.productForm.value);
    }
  }
}
