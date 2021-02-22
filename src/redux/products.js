// -> Products reducer
import { PRODUCTS } from '../shared/prodcuts';
import * as ActionTypes from './ActionTypes';

export const Products = (state = PRODUCTS, action) => {
	switch (action.type) {
		case ActionTypes.ADD_CART:
			var product = action.payload;
			product.id = state.length;
			product.date = new Date().toISOString();
			return state.concat(product);
		default:
			return state;
	}
};
