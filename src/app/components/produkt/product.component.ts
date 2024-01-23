import {Component, Input} from '@angular/core';
import { CurrencyPipe, NgIf, NgClass, NgStyle, DecimalPipe  } from '@angular/common';
import { IProduct } from '../../models/product';


@Component ({
  selector: 'app-product',
  imports: [CurrencyPipe, NgIf, NgClass, NgStyle, DecimalPipe ],
  standalone: true,
  templateUrl: './product.component.html'
})

export class ProductComponent {
  @Input() product: IProduct

  details: boolean = false

}
