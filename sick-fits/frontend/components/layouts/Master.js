import React from 'react';
import Header from '../Header';
import Meta from '../Meta';

// import PropTypes from 'prop-types';

const Master = props => {
  return (
    <div>
      <Meta />
      <Header />
      {props.children}
    </div>
  );
};

// Master.propTypes = {};

export default Master;
