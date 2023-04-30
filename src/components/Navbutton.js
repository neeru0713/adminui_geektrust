import React from "react";
import PropTypes from 'prop-types';

const Navbutton = ({ NavbuttonHandler, pageNumber, page }) => {

  Navbutton.propTypes = {
    NavbuttonHandler: PropTypes.func.isRequired,
    pageNumber: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
  };

  return (
    <button
      onClick={NavbuttonHandler}
      className={
        pageNumber === page ? "whitebg round-button" : "bluebg round-button"
      }
    >
      {page}
    </button>
  );
};

export default Navbutton;
