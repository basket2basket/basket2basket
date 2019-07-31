import React from 'react';
import axios from 'axios';

class CustomForm extends React.Component {

    //handle submit?

    handleFormSubmit = (event, requestType, listingID) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const category = event.target.elements.category.value;
        const status = event.target.elements.status.value;
        const address = event.target.elements.address.value;

        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${this.props.token}`,
        };

        switch (requestType) {
            case 'post':
                axios.post('https://basket2basket.herokuapp.com/listings/create/', {
                    title: title,
                    description: description,
                    price: price,
                    category: category,
                    status: status,
                    address: address
                })
                    .then(res => {
                        console.log(res)
                        this.props.history.push('/');
                    })
                    .catch(err => {
                        console.log(err)
                    });

            case 'put':
                axios.put(`https://basket2basket.herokuapp.com/listings/create/${listingID}/`, {
                    title: title,
                    description: description,
                    price: price,
                    category: category,
                    status: status,
                    address: address
                })
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    });
        }
    }

    render() {

        return (
            <div className="columns is-centered">
                <div className="column is-half">
                    <div className="form-title">
                        <h2>Create a new listing</h2>
                    </div>
                    <form
                        onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.listingID)}>
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="control">
                                <input name="title" className="input" type="text" placeholder="Listing Name"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Description</label>
                            <div className="control">
                                <input name="description" className="input" type="textarea" rows="5"
                                       placeholder="Listing Name"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Category</label>
                            <div className="control">
                                <div className="select is-primary">
                                    <select name="category" id="category">
                                        <option value="fruits">Fruits</option>
                                        <option value="vegetables">Vegetables</option>
                                        <option value="dairy">Dairy</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Price</label>
                            <div className="control">
                                <input type="number" name="price" className="input is-primary" placeholder="0"
                                       step="any"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Address</label>
                            <div className="control">
                                <input name="address" className="input" type="text" placeholder="Listing Address"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Status</label>
                            <div className="control">
                                <input name="status" className="input" type="text" placeholder="Listing available"/>
                            </div>
                        </div>

                        <div className="control">
                            <button className="button is-primary" type="primary" htmlType="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CustomForm;

