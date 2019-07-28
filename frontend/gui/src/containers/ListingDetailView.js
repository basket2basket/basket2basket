import React from 'react';
import axios from 'axios'

import {Card} from "antd";

class ListingDetail extends React.Component {

    state = {
        listing: {}
    };

    componentDidMount() {
        const listingID = this.props.match.params.listingID;
        axios.get(`http://127.0.0.1:8000/api/${listingID}`)
            .then(res => {
                this.setState({
                    listing: res.data
                })
            })
    }

    render() {
        return (
            <Card title={this.state.listing.title}>
                <p>{this.state.listing.content}</p>
            </Card>
        )
    }
}

export default ListingDetail;