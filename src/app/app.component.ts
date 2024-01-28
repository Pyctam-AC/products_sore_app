import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ProductComponent } from './components/produkt/product.component';
import { IProduct } from './models/product';
import { ProductService } from './services/product.service';
import { Observable, tap } from 'rxjs';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { FilterProductsPipe } from './pipes/filter-products.pipe';
import { ModalComponent } from './components/modal/modal.component'
import { CreateProductComponent } from './components/create-product/create-product.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ModalService } from './services/modal.service';
//import { products as data } from './data/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, RouterOutlet, ProductComponent, HttpClientModule, GlobalErrorComponent, FormsModule, FilterProductsPipe, ModalComponent, CreateProductComponent,  NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductService]
})
export class AppComponent {


}
