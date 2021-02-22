import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	DropdownToggle,
	DropdownMenu,
	Dropdown,
	DropdownItem,
	UncontrolledDropdown,
	NavbarText,
	Button,
	Badge,
	Row,
	Col,
} from 'reactstrap';
import '../../App.css';
const NavLinks = (props) => {
	const [colps, setColps] = useState(false);
	const toggleCollapse = () => setColps((prevState) => !prevState);

	return (
		<Row className='m-2' alignItems='center'>
			<Col sm={{ size: 6, offset: 3 }}>
				<Nav color='light' className='App'>
					<NavItem color='none'>
						<NavLink href='#'>Home</NavLink>
					</NavItem>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Men
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem>Suits</DropdownItem>
							<DropdownItem>Shirts</DropdownItem>
							<DropdownItem>Trousers</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Shoes</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Women
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem>Suits</DropdownItem>
							<DropdownItem>Shirts</DropdownItem>
							<DropdownItem>Trousers</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Shoes</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<NavItem>
						<NavLink href='#'>LookBook</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='#'>About</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href='#'>Blog</NavLink>
					</NavItem>
				</Nav>
			</Col>
			<Col xl='3'>
				<i class='fas fa-loveseat fa-sm fa-fw'></i>
			</Col>
		</Row>
	);
};

const NavBar = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

	return (
		<React.Fragment>
			<Navbar color='light' light expand='md' className='mr-auto'>
				<Collapse isOpen={isOpen} navbar>
					<Nav navbar>
						<NavItem>
							<Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
								<DropdownToggle caret color='none'>
									USD
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>USD</DropdownItem>
									<DropdownItem>ETB</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</NavItem>
					</Nav>
				</Collapse>
				<NavbarBrand href='/'>
					<img
						src='assets/images/logo.svg'
						height='50'
						width='50'
						alt='React Fashion'
					/>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='mr-auto' navbar></Nav>
					<Button color='outline' size='lg'>
						Cart <Badge color='warning'>3</Badge>
					</Button>
				</Collapse>
			</Navbar>
			<NavLinks />
		</React.Fragment>
	);
};

export default NavBar;
