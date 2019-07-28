import React from 'react';
import Listing from '../components/Listing'
import axios from 'axios'



class ListingList extends React.Component {

    state = {
        listings: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/listings/')
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
            </div>
        )
    }
}

export default ListingList;