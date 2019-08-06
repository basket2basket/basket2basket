import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HeaderController extends Component {
    render() {
        return (
            <div className="navbar-end">
                <div className="navbar-item has-dropdown  is-hoverable">
                    <div className="navbar-link">

                    </div>
                    <div className="navbar-dropdown is-right">

                        {
                            this.props.isAuthenticated ?

                                <Link onClick={this.props.logout} className="navbar-item">
                                    <div>
                                        Logout
                                    </div>
                                </Link>

                                :

                                <Link to="/login" className="navbar-item">
                                    <div>
                                        Login
                                    </div>
                                </Link>

                        }

                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderController;