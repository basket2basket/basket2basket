import React from 'react';
import axios from 'axios';

class CustomForm extends React.Component {

    //handle submit?

    handleFormSubmit = (event, requestType, listingID) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        switch (requestType) {
            case 'post':
                axios.post('https://basket2basket.herokuapp.com/listings/create/', {
                    title: title,
                    content: content
                })
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                });

            case 'put':
                axios.put(`https://basket2basket.herokuapp.com/listings/create/${listingID}/`, {
                    title: title,
                    content: content
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
            <div>
                <form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.listingID)}>
                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input name="title" className="input" type="text" placeholder="Listing Name"/>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Content</label>
                        <div className="control">
                            <input name="content" className="input" type="text" placeholder="Listing Name"/>
                        </div>
                    </div>

                    <div className="control">
                        <button className="button is-primary" type="primary" htmlType="submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CustomForm;

