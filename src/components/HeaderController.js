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
                                         <span className="icon is-small">
                                    <i className="fa fa-bug"></i>
                                 </span>
                                        Logout
                                    </div>
                                </Link>

                                :

                                <Link to="/login" className="navbar-item">
                                    <div>
                                         <span className="icon is-small">
                                    <i className="fa fa-bug"></i>
                                 </span>
                                        Login
                                    </div>
                                </Link>

                        }

                        <a className="navbar-item">
                            <div>
                                 <span className="icon is-small">
                                    <i className="fa fa-bug"></i>
                                 </span>
                                Report bug
                            </div>
                        </a>


                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderController;