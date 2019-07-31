import React from 'react';
import Listing from '../components/Listing'
import axios from 'axios'



class ListingList extends React.Component {

    state = {
        listings: []
    }

    componentDidMount() {
        axios.get('https://basket2basket.herokuapp.com//listings/')
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