import React from 'react';
import { Route } from 'react-router-dom';
import ListingList from './containers/ListingListView';
import ListingDetailView from './containers/ListingDetailView';
import CustomForm from './components/Form';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ListingList} />
        <Route exact path='/create' render={(props) => <CustomForm {...props} requestType="post" listingID={null} />}/>
        <Route exact path='/:listingID' component={ListingDetailView} />
    </div>
)

export default BaseRouter;