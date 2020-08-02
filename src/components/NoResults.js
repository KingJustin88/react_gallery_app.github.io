import React from 'react';

// no results page that renders when no search is found
const NoResults = () => {
    return (
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    );
};

export default NoResults;