import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isVisibles$ = new BehaviorSubject<boolean>(false)

  constructor() { }

  open () {
    this.isVisibles$.next(true)
  }

  close () {
    this.isVisibles$.next(false)
  }
}
