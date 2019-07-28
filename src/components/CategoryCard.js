import React from 'react';


class CategoryCard extends React.Component {

    state = {
    };


    render() {
        return (
            <div>
                <Card title={this.props.name}>
                    <p>{this.state.listing.content}</p>
                </Card>
            </div>
        )
    }
}

export default ListingDetail;