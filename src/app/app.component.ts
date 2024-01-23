import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/produkt/product.component';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';
import { Observable, tap } from 'rxjs';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
//import { products as data } from './data/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterOutlet, ProductComponent, HttpClientModule, GlobalErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductService]
})
export class AppComponent implements OnInit {

  title = 'products store app';
  /* products: IProduct[] = data */
  products: IProduct[] = [];
  loading: boolean = false
  products$: Observable<IProduct[]>

  constructor (private productServices: ProductService) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productServices.getAll().pipe (
      tap(() => this.loading = false)
    )
    /* this.productServices.getAll().subscribe((products) => {
      //console.log(products)
      this.products = products;
      this.loading = false;
    })*/
  }
}
