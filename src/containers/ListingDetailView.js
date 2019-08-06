import React from 'react';
import axios from 'axios'
import CustomForm from '../components/Form';

import {Card} from "antd";
import Button from "antd/es/button/button";

class ListingDetail extends React.Component {

    state = {
        listing: {}
    };

    componentDidMount() {
        const listingID = this.props.match.params.listingID;
        axios.get(`http://127.0.0.1:8000/api/listings/${listingID}/`)
        // axios.get(`https://basket2basket.herokuapp.com/api/listings/${listingID}/`)
            .then(res => {
                console.log(res);
                this.setState({
                    listing: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <Card title={this.state.listing.title}>
                    <p><label htmlFor="description"><strong>Description: </strong></label>{this.state.listing.description}</p>
                    <p><label htmlFor="price"><strong>Price: </strong></label>{this.state.listing.price}</p>
                    <p><label htmlFor="status"><strong>Status: </strong></label>{this.state.listing.status}</p>
                    <p><label htmlFor="category"><strong>Category: </strong></label>{this.state.listing.category}</p>
                    <p><label htmlFor="address"><strong>Address: </strong></label>{this.state.listing.address}</p>
                    <br/>
                    <button className="button is-primary">Buy</button>
                </Card>
            </div>
        )
    }
}

export default ListingDetail;