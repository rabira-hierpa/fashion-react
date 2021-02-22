import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Products } from './products';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitalCart } from './forms';
export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			products: Products,
			...createForms({ cart: InitalCart }),
		}),
		// -> added redux loger here
		applyMiddleware(thunk, logger)
	);
	return store;
};
