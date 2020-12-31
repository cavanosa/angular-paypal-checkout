import { CartItemModel } from './../models/cart-item-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  existsCart(): boolean {
    return localStorage.getItem('cart') != null;
  }

  setCart(cart: CartItemModel[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): CartItemModel[] {
    return JSON.parse(localStorage.getItem('cart'));
  }

  clear(): void {
    localStorage.removeItem('cart');
  }
}
