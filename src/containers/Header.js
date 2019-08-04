import React, {Component} from 'react';
import HeaderBrand from '../components/HeaderBrand';
import HeaderController from '../components/HeaderController';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar has-shadow">
                    <HeaderBrand />
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item">
                                <small><a href={`/`}>Basket2basket</a></small>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <a className="navbar-item" href="/">
                                Listings
                            </a>
                            <a className="navbar-item" href="/create">
                                Create
                            </a>
                        </div>

                    <HeaderController {...this.props} />
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;