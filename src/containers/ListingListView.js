import React from 'react';
import Listing from '../components/Listing'
import axios from 'axios'
import CustomForm from '../components/Form';


class ListingList extends React.Component {

    state = {
        listings: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    listings: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <Listing data={this.state.listings}/>
                <br/>
                <h2>Create a listing</h2>
                <CustomForm/>
            </div>
        )
    }
}

export default ListingList;