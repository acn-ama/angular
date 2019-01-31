import { Cart } from 'src/app/interfaces/cart';
import * as cart from '../actions/cart.action';
import { CartActions } from 'src/app/enums/CartActions.enum';

const initialState: Cart[] = [];

export function cartReducer(
    state = initialState,
    action: cart.CartAction) {
    switch (action.type) {
        case CartActions.ADD_TO_CART:
            return [
                ...state,
                ...[action.payload]
            ];
        default:
            return state;
    }
}
