import React from 'react';
import axios from 'axios'
import CategoryCard from '../components/CategoryCard';
import {List} from "antd";
import * as actions from "../store/actions/category";
import {connect} from "react-redux";
import categoryReducer from "../store/reducers/category";

class CategoryList extends React.Component {


    state = {
        categories: [
            {id: 1, name: "Produce", icon: "fa-cutlery"},
            {id: 2, name: "Cat Products", icon: "fa-paw"},
            {id: 3, name: "Apparel", icon:"fa-shopping-bag"},
            {id: 4, name: "Miscellaneous", icon:"fa-cart-plus"}
        ]
    };

    onClickFunct(category) {

        this.props.changeCat(category);
    }


    render() {


        return (
            <div>

                <div className="title-div columns">
                    <h1 className="title-h1 column is-full">Basket2basket</h1>
                </div>

                <div className="columns is-full categories-container">
                {this.state.categories.map((category, index) => {
                    let handleClick = () => {
                        this.onClickFunct(category.name);
                    };
                    return <CategoryCard name={<a href={`/listings/?category=`+category.name}  onClick={handleClick}>{category.name}  </a>}
                                         category={category.name} icon={category.icon} key={category.id}/>
                })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.categoryReducer.category
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeCat: (category) => dispatch(actions.changeCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);