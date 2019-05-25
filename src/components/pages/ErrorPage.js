import React from 'react';
import PropTypes from 'prop-types'

const ErrorPage = ({ children }) => {
   return <div>Error Page</div>;
}

ErrorPage.propTypes = {
   children: PropTypes.node
}

export default ErrorPage;