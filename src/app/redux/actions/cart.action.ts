import { Action } from '@ngrx/store';
import { CartActions } from 'src/app/enums/CartActions.enum';
import { Cart } from 'src/app/interfaces/cart';

export class InsertProductCart implements Action {
    readonly type: string = CartActions.ADD_TO_CART;
    constructor(public payload: Cart) { }
}

export type CartAction = InsertProductCart;
