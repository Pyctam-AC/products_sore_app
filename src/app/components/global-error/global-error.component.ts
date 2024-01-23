import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-global-error',
  standalone: true,
  imports: [AsyncPipe, NgIf ],
  templateUrl: './global-error.component.html',
  styleUrl: './global-error.component.scss'
})
export class GlobalErrorComponent implements OnInit  {

  constructor(public errorService: ErrorService) {}

  ngOnInit(): void {

  }

}
