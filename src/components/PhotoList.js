import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Photo from './Photo';
import NoResults from './NoResults';


class PhotoList extends Component {

    componentDidMount = () => {
        // replacing the exisiting list of photos with the newly search for photos or when clicking on specific link of photos
        this.props.history.listen(location => this.props.search(location.pathname.replace(/[^\w\s]/gi, '').replace("search", '')));
        this.props.search(this.props.text);
    }

    render() {
        const results = this.props.data;
        let photos;
        // if results dont match then show NoResults page, if they do then list of photos will show
        if (!results.length) {
            photos = <NoResults />
        } else {
            photos = results.map(photo =>
                <Photo key={photo.id} url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} pathId={photo.id}/>
            );  
        }
        
        return(
            <ul className="photo-list">
                {/* loading image indicator when searching for photos */}
                {this.props.loading ? <img src={require("../images/loading_image.jpg")} alt="" /> : photos}
            </ul>
        );
    }
}


export default withRouter(PhotoList);