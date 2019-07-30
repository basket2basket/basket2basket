import React from 'react';
import { Route } from 'react-router-dom';
import ListingList from './containers/ListingListView';
import ListingDetailView from './containers/ListingDetailView';
import Login from './containers/Login';
import Signup from './containers/Signup';
import CustomForm from './components/Form';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ListingList} />
        <Route exact path='/create' render={(props) => <CustomForm {...props} requestType="post" listingID={null} />}/>
        <Route exact path='/listings/:listingID/' component={ListingDetailView} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
    </div>
)

export default BaseRouter;