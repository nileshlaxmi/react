import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    return(
        <div className="list-item">
            <li>{props.item}</li>
        </div>
    )
}

export default ListItem;