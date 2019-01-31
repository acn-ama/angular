import { cartReducer } from './reducers/cart.reducer';

export interface State {
    cart: [];
}

export const reducers = {
    cart: cartReducer
};
