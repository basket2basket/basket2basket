import React from 'react';


class CategoryCard extends React.Component {


    render() {

        return (
            <div className="column">

                <a href={`/listings/?category=`+this.props.name}><i className={`fa icon-size ${ this.props.icon }`}> </i>
                    {this.props.name}</a>

            </div>
        )
    }
}

export default CategoryCard;