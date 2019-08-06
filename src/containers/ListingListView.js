import React from 'react';
import Listing from '../components/Listing'
import axios from 'axios'
import {connect} from "react-redux";
import categoryReducer from "../store/reducers/category";
import querySearch from "stringquery";


class ListingList extends React.Component {

    state = {
        listings: [],
        category: '',
    }


    componentDidMount() {

        let query = querySearch(this.props.location.search);

        if (query) {
            if (query.category) {
                axios.get('http://127.0.0.1:8000/api/listings/catList/?category=' + query.category)
                // axios.get('https://basket2basket.herokuapp.com/api/listings/catList/?category=' + query.category)
                    .then(res => {
                        console.log(res);
                        this.setState({
                            listings: res.data
                        })
                    })
            } else {
                // axios.get('http://127.0.0.1:8000/api/listings/')
                axios.get('https://basket2basket.herokuapp.com/api/listings/')
                    .then(res => {
                        console.log(this.props.category);
                        this.setState({
                            listings: res.data
                        })
                    })

            }

        }


    }

    render() {
        return (
            <div>
                <Listing data={this.state.listings}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.categoryReducer.category
    };
};


export default connect(mapStateToProps)(ListingList);
