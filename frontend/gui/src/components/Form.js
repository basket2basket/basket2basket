import React from 'react';
import {Form, Input, Button} from 'antd';

class CustomForm extends React.Component {

    //handle submit?

    handleFormSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        const category = event.target.elements.category.value;
        const address = event.target.elements.address.value;
        const status = event.target.elements.status.value;

        console.log(title, content, category, address, status)
    }

    render() {

        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Item label="Title">
                        <Input name="title" placeholder="Enter Listing Title"/>
                    </Form.Item>
                    <Form.Item label="Category">
                        <select name="category" placeholder="Enter Category">
                            <option value="fruits">Fruits</option>
                            <option value="vegetables">Vegetables</option>
                        </select>
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input name="content" placeholder="Enter Listing Content"/>
                    </Form.Item>
                    <Form.Item label="Address">
                        <Input name="address" placeholder="Enter Address"/>
                    </Form.Item>
                    <Form.Item label="Status">
                        <Input name="status" placeholder="Status"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default CustomForm;

