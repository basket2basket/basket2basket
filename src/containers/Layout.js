import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import Header from './Header';

// const {Header, Content, Footer} = Layout;

const CustomLayout = (props) => {
    return (
        <div>
            <Header {...props} />

            <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                {props.children}
            </div>


        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));

