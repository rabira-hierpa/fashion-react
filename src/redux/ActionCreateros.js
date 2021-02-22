import * as ActionTypes from './ActionTypes';

export const addCart = (color, size, quantity) => ({
	type: ActionTypes.ADD_CART,
	payload: { productName: 'The Boston Coat', color, size, quantity },
});
