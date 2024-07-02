import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../interface/product';
import { Observable, Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent implements OnInit {
  // products: IProduct[] = [];
  // productSubscription?: Subscription;
  // constructor(private appService: ProductService) {}

  // productObserver = {
  //   next: (data: IProduct[]) => {
  //     this.products = data;
  //   },
  //   error: (error: any) => {
  //     console.log(error);
  //   },
  //   complete: () => {
  //     console.log('product stream completed ');
  //   },
  // };

  // ngOnInit(): void {
  //   this.productSubscription = this.appService.Products$.subscribe(
  //     this.productObserver
  //   );
  // }

  // ngOnDestroy(): void {
  //   if (this.productSubscription) {
  //     this.productSubscription.unsubscribe();
  //   }
  // }

  products$!: Observable<IProduct[]>;
  constructor(private appService: ProductService) {}
  ngOnInit(): void {
    this.products$ = this.appService.Products$;
    console.log(this.products$, 'this.products$');
  }
}
