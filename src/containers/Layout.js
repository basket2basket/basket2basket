import React from 'react';
// import {Layout, Menu, Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import Header from './Header';

// const {Header, Content, Footer} = Layout;

const CustomLayout = (props) => {
    return (
        <div>
            <Header/>

            <div style={{background: '#fff', padding: 24, minHeight: 280}}>
                {props.children}
            </div>


        </div>
    )
}

export default CustomLayout;

