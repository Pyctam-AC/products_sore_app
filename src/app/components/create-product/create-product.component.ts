import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  form = new FormGroup ({
    title: new FormControl<string>('')
  })
submit: any;
}
