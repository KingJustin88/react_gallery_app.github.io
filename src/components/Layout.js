import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Search from './Search';

class Layout extends Component {
    // handles the search input
    handleRoute = text => {
        this.props.history.push(`/search/${text}`);
    }

    // renders the Search component and links for three particular searches
    render() {
        return (
            <React.Fragment>               
                    <nav className="main-nav">
                        <Search onSearch={this.handleRoute}/>
                            <ul>                   
                                <li><NavLink to="/cats">Cats</NavLink></li>
                                <li><NavLink to="/dogs">Dogs</NavLink></li>
                                <li><NavLink to="/sunsets">Sunsets</NavLink></li>
                            </ul>
                    </nav>
                <div className="photo-container">                   
                    <h2>Results</h2>                    
                </div>    
            </React.Fragment>
        );
    }    
}

export default withRouter(Layout);