import React from 'react';
import { Route } from 'react-router-dom';
import ListingList from './containers/ListingListView';
import ListingDetailView from './containers/ListingDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ListingList} />
        <Route exact path='/:listingID' component={ListingDetailView} />
    </div>
)

export default BaseRouter;