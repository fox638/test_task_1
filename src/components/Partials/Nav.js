import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import styled from 'styled-components'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand
} from 'reactstrap'

const NavBarSection = styled.div`
    background-color: #488ED8;
 
`

const Logo = styled(Link)`
    display: inline-block;
    padding: 1rem 2rem;
    text-transform: uppercase;
    text-decoration:none;
    color: black;
    font-weight:bold;

`

class FullNav extends React.Component {

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    } 

    render() {
        return (
            <NavBarSection>
                <Navbar color='light' light expand="md">
                    <NavbarBrand href="/">Новости</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav>
                            <NavItem>
                                <Link to="/" className="nav-link">Главная</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/auth/signin" className="nav-link">Логин</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/news" className="nav-link">Новости</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/profile" className="nav-link">Профиль</Link>
                            </NavItem>
                        </Nav>    
                    
                    </Collapse>


                    
                </Navbar>

                
            </NavBarSection>
        )
    }
}

export default FullNav