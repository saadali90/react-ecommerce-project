import React from 'react';
import './VerticalMenu.css';

const VerticalMenu = (props) => {
    return(
        <React.Fragment>
            <li>
                <a href={props.link}> {props.title} </a>
            </li>
        </React.Fragment>
    );
};

export default VerticalMenu;