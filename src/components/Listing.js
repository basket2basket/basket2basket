import React from 'react';

import {List, Avatar, Icon} from 'antd';

function Listings(props){
    const item = props.data;
    const listItems = item.map(
        (item) =>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src="http://images.clipartpanda.com/apple-20clip-20art-nicubunu_Apple_Clipart_Free.png" alt="Image"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{item.title}</strong>
                                <br/>
                                <label htmlFor="description"><strong>Description: </strong></label><span>{item.description}</span>
                                <br/>
                                <label htmlFor="price"><strong>Price: </strong></label><span>{item.price}</span>
                                <br/>
                                <label htmlFor="category"><strong>Status: </strong></label><span>{item.status}</span>
                                <br/>
                                <label htmlFor="address"><strong>Address: </strong></label><span>{item.address}</span>
                            </p>
                        </div>
                    </div>
                </article>
            </div>);

    return (
        <div className="items is-half is-centered">{listItems}</div>
    );
}

// const Listings = (props) => {
//     return (
//         <List
//             itemLayout="vertical"
//             size="large"
//             pagination={{
//                 onChange: page => {
//                     console.log(page);
//                 },
//                 pageSize: 3,
//             }}
//             dataSource={props.data}
//
//             renderItem={item => (
//                 <List.Item
//                     key={item.title}
//                 >
//                     <List.Item.Meta
//                         avatar={<Avatar src={item.avatar}/>}
//                         title={<a href={`/listings-show/${item.id}`}>{item.title}</a>}
//                         description={item.description}
//                     />
//                     {console.log(item)}
//                 </List.Item>
//             )}
//         />
//
//     )
// }

export default Listings;