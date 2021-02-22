import React, { Component } from 'react';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCart } from '../redux/ActionCreateros';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from './NavBar/NavBar';
import Shop from './Shop.js';

// - When retriving state from the store
// - use mapStateToProps

const mapStateToProps = (state) => {
	return {
		products: state.products,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addCart: (color, size, quantity) => dispatch(addCart(color, size, quantity)),
	resetCart: () => {
		dispatch(actions.reset('cart'));
	},
});

class Main extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<TransitionGroup>
					<CSSTransition
						key={this.props.location.key}
						classNames='page'
						timeout={300}
					>
						<Switch>
							<Route
								path='/shop'
								component={() => (
									<Shop
										products={
											this.props.products.filter(
												(product) => product.featured
											)[0]
										}
										addCart={this.props.addCart}
										resetCartForm={this.props.resetCart}
									/>
								)}
							/>
							<Redirect to='/shop' />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Footer />
			</div>
		);
	}
}

// ! Make sure to add both mapStateToProps and mapDispatchToProps
// ! to the connect Action Creator function
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
