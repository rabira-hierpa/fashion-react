import React, { Component } from 'react';
import {
	Navbar,
	NavbarBrand,
	Nav,
	NavbarToggler,
	Collapse,
	NavItem,
	Jumbotron,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	toggleNav() {
		this.setState({ isNavOpen: !this.state.isNavOpen });
	}

	toggleModal() {
		this.setState({ isModalOpen: !this.state.isModalOpen });
	}

	handleLogin(event) {
		this.toggleModal();
		alert(
			'Username: ' +
				this.username.value +
				' Password: ' +
				this.password.value +
				' Remberme: ' +
				this.remember.checked
		);
		event.preventDefault();
	}

	render() {
		return (
			<React.Fragment>
				<Navbar dark expand='md'>
					<div className='container'>
						<NavbarToggler onClick={this.toggleNav} />
						<NavbarBrand className='mr-auto' href='/'>
							<img
								src='assets/images/logo.svg'
								height='30'
								width='41'
								alt='Fashion React'
							/>
						</NavbarBrand>
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className='nav-link' to='/home'>
										<span className='fa fa-home fa-lg'></span> Home
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/about'>
										<span className='fa fa-info fa-lg'></span> About Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/menu'>
										<span className='fa fa-list fa-lg'></span> Menu
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/contactus'>
										<span className='fa fa-address-card fa-lg'></span> Contact
										Us
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/shop'>
										<span className='fa fa-cart-plus fa-lg'></span> Shop
									</NavLink>
								</NavItem>
							</Nav>
							<Nav className='ml-auto' navbar>
								<NavItem>
									<Button outline onClick={this.toggleModal}>
										<span className='fa fa-sign-in fa-lg'></span>Login
									</Button>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</React.Fragment>
		);
	}
}
