import React from 'react';


const Photo = props => (
    <li className="photo">
        {/* grabbing specific photo and url link, also displaying on new browser tab */}
        <a href={`https://www.flickr.com/photo.gne?id=${props.pathId}`} target="_blank" rel="noopener noreferrer">
            <img src={props.url} alt=""/>
        </a>
    </li>
)

export default Photo;