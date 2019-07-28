import React from 'react';

import {List, Avatar, Icon} from 'antd';


const Listings = (props) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={props.data}

            renderItem={item => (
                <List.Item
                    key={item.title}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar}/>}
                        title={<a href={`/show/${item.id}`}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />

    )
}

export default Listings;