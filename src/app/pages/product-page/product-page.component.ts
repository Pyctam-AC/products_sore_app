import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { IProduct } from '../../models/product';
import { ModalService } from '../../services/modal.service';
import { ProductService } from '../../services/product.service';
import { ProductComponent } from "../../components/produkt/product.component";
import { ModalComponent } from "../../components/modal/modal.component";
import { CreateProductComponent } from "../../components/create-product/create-product.component";
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FilterProductsPipe } from "../../pipes/filter-products.pipe";

@Component({
    selector: 'app-product-page',
    standalone: true,
    templateUrl: './product-page.component.html',
    styleUrl: './product-page.component.scss',
    imports: [ProductComponent, ModalComponent, CreateProductComponent, CurrencyPipe, CommonModule, FilterProductsPipe, FormsModule]
})
export class ProductPageComponent {

  title = 'products store app';
  /* products: IProduct[] = data */
  products: IProduct[] = [];
  loading: boolean = false;
 //products$: Observable<IProduct[]>
  term: '';

  constructor (
    public productServices: ProductService,
    public modalService: ModalService
    ) {

  }

  ngOnInit(): void {
    this.loading = true;
    /* this.products$ = this.productServices.getAll().pipe (
      tap(() => this.loading = false)
    ) */
    this.productServices.getAll().subscribe(() => {
      //console.log(products)
      //this.products = products;
      this.loading = false;
    })
  }

}
