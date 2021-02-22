import React, { Component } from 'react';
import { Col, NavLink, Row, Button, Label } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
const required = (val) => val && val.length;

class ShopeItem extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImgClick = this.handleImgClick.bind(this);
		this.state = {
			featuredImage: this.props.products.images[0],
		};
	}
	handleSubmit(values) {
		console.log('Current State is: ' + JSON.stringify(values));
		this.props.addCart(values.color, values.size, values.quantity);
		alert('Current State is: ' + JSON.stringify(values));
		this.props.resetCartForm();
	}
	handleImgClick(productImg) {
		this.setState({ featuredImage: productImg });
	}
	render() {
		const { products } = this.props;
		return (
			<Row className='alignRow'>
				<Col xl={{ size: 8, offset: 2 }}>
					<Row className='mb-2'>
						{/* Image display */}
						<Col xs='12' lg='6'>
							<img
								className='img-fluid'
								src={this.state.featuredImage}
								alt='Jacket'
							/>

							<Row className='mt-5'>
								{products.images.length
									? products.images.map((productImg, idx) => {
											return (
												<Col xs='2'>
													<div className='image-box'>
														<img
															className='img-fluid'
															src={productImg}
															alt='Jacket'
															onClick={(e) => this.handleImgClick(productImg)}
														/>
													</div>
												</Col>
											);
									  })
									: null}
							</Row>
						</Col>
						{/* Product details */}
						<Col lg='6'>
							<Row align='left'>
								<Col lg='12'>
									<Row className='mb-2' align='left'>
										<Col>
											<NavLink href='#'>Back to Women</NavLink>
										</Col>
									</Row>
									<Row className='mb-2' align='left'>
										<NavLink href='#'>
											<h2>
												<strong>{products.name}</strong>
											</h2>
										</NavLink>
									</Row>
									<Row className='mb-2' alignItems='left'>
										<Col justify='right'>
											<p>ADD REVIEW</p>
										</Col>
									</Row>
									<Row className='mb-2'>
										<Col>
											<h3 color='#00FEFF9'>${products.price}</h3>
										</Col>
									</Row>
									<Row>
										<p>
											{products.description}
											<ul>
												<li>
													Lorem ipsum dolor, sit amet consectetur adipisicing
													elit
												</li>
												<li>Lorem, ipsum dolor.</li>
												<li>Lorem ipsum dolor sit amet.</li>
												<li>Lorem ipsum dolor sit.</li>
											</ul>
										</p>
									</Row>
									<Row>
										<Form
											model='cart'
											onSubmit={(values) => this.handleSubmit(values)}
										>
											<Row className='form-group'>
												<Col md={{ size: 4 }}>
													<Label htmlFor='color' md={2}>
														<strong>COLOR</strong>
													</Label>
													<Control.select
														model='.color'
														name='color'
														className='form-control'
														validators={required}
													>
														<option>Brown</option>
														<option>Black Navy</option>
														<option>White</option>
													</Control.select>
													<Errors
														className='text-danger'
														model='.color'
														show='touched'
														messages={{
															required: 'Required',
														}}
													/>
												</Col>
												<Col lg={{ size: 4 }}>
													<Label htmlFor='size' md={2}>
														<strong>SIZE</strong>
													</Label>
													<Control.select
														model='.size'
														name='size'
														className='form-control'
														validators={required}
													>
														<option>Small</option>
														<option>Medium</option>
														<option>Large</option>
														<option>Extra Large</option>
													</Control.select>
													<Errors
														className='text-danger'
														model='.size'
														show='touched'
														messages={{
															required: 'Required',
														}}
													/>
												</Col>
												<Col md={{ size: 4 }}>
													<Label htmlFor='size' md={2}>
														<strong>QTY.</strong>
													</Label>
													<Control
														model='.quantity'
														name='quantity'
														className='form-control'
														min={0}
														max={5}
														type='number'
														placeholder='QTY'
														step='1'
														validators={required}
													/>
													<Errors
														className='text-danger'
														model='.quantity'
														show='touched'
														messages={{
															required: 'Required',
														}}
													/>
												</Col>
											</Row>
											<Row>
												<Col className='m-auto'>
													<div
														onclick={actions.reset('cart')}
														className='nav-link'
													>
														Clear selection
													</div>
												</Col>
											</Row>
											<Row className='form-group'>
												<Col xs={{ size: 6 }}>
													<Button className='btn-block' type='submit'>
														ADD TO CART
													</Button>
												</Col>
												<Col xs={{ size: 6 }}>
													<Button className='btn-block' type='submit'>
														<i class='fa fa-love fa-1x' aria-hidden='true'></i>{' '}
														ADD TO WISHLIST
													</Button>
												</Col>
											</Row>
										</Form>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		);
	}
}

export default ShopeItem;
