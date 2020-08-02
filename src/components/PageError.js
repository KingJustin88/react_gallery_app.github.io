import React from 'react';

// file not found page, added a picture of 404 error when route is not found
const PageError = () => (
  <div>
    <img src={require("../images/404_image.jpg")} alt="" />
  </div>
);

export default PageError;