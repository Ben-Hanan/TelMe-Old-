// To create a REACT component - type RCE "tab"

import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            // <!-- Navigation -->
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <form className="form-inline">
                        <a className="navbar-brand" href="#">TelMe</a>
                        <a className="nav-item nav-link" href="#">What's New</a>
                        <a className="nav-item nav-link" href="#">Products</a>
                        <a className="nav-item nav-link" href="#">Compare</a>
                    </form>
                    <form className="form-inline">
                        <a className="btn btn-outline-primary" href="#">Login</a>
                        <a className="btn btn-outline-secondary" href="#">Register</a>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Header
