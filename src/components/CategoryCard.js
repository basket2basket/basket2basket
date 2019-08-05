import React from 'react';


class CategoryCard extends React.Component {


    render() {

        return (
            <div className="column">
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default CategoryCard;