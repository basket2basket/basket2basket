import React from 'react';


class CategoryCard extends React.Component {


    render() {

        return (
            <div className="column">
                <i className={`fa icon-size ${ this.props.icon }`}> </i>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default CategoryCard;