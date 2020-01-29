import React from 'react';
import './menu-item.scss';
// withRouter is a HOC
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

// Pass the component into withRouter and withRouter will
// return back with the same name compnent a super powered 
// component with access to the location match and history 
// props that we need access to.
export default withRouter(MenuItem);
