import React from 'react';
import { Route } from 'react-router-dom';
import ListingList from './containers/ListingListView';
import ListingDetailView from './containers/ListingDetailView';
import CategoryList from './containers/CategoryList';
import Login from './containers/Login';
import Signup from './containers/Signup';
import CustomForm from './components/Form';

/*<Route exact path='/' component={ListingList} />*/

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={CategoryList}/>
        {/*<Route exact path='/listings:category' component={ListingList}/>*/}
        <Route exact path='/listings' render={(props) => <ListingList {...props}/>}/>
        <Route exact path='/create' render={(props) => <CustomForm {...props} requestType="post" listingID={null} />}/>
        <Route exact path='/listings-show/:listingID/' component={ListingDetailView} />
        <Route exact path='/login/' component={Login} />
        <Route exact path='/signup/' component={Signup} />
    </div>
)

export default BaseRouter;