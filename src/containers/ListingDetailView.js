import React from 'react';
import axios from 'axios'
import CustomForm from '../components/Form';

import {Card} from "antd";

class ListingDetail extends React.Component {

    state = {
        listing: {}
    };

    componentDidMount() {
        const listingID = this.props.match.params.listingID;
        axios.get(`https://basket2basket.herokuapp.com/listings/${listingID}`)
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
                    <p>{this.state.listing.content}</p>
                </Card>
            </div>
        )
    }
}

export default ListingDetail;