import React from 'react';
import {Form, Input, Button} from 'antd';

class CustomForm extends React.Component {

    //handle submit?

    handleFormSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content)
    }

    render() {

        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Item label="Title">
                        <Input name="title" placeholder="Enter Listing Title"/>
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input name="content" placeholder="Enter Listing Content"/>
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

