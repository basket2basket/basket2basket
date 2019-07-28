import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import BaseRouter from './routes'
import 'antd/dist/antd.css';


import CustomLayout from './containers/Layout';
import ListingListView from './containers/ListingListView'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <CustomLayout>
                        <BaseRouter/>
                    </CustomLayout>
                </Router>
            </div>
        )
    }
}

export default App;
