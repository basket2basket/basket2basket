import React from 'react';
import axios from 'axios'

class CategoryList extends React.Component {

    state = {

    };

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