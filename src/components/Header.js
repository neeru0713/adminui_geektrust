import React from "react";
import PropTypes from 'prop-types';

const Header = ({ constData, getPages, updateData }) => {
  Header.propTypes = {
    constData: PropTypes.array.isRequired,
    getPages: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
  };
      
  // Used to filter data when search term is input in the search bar
  function inputHandler(event) {
    let value = event.target.value;
    let filteredArray = constData.filter((rowData) => {
      return (
        rowData.name.includes(value) ||
        rowData.email.includes(value) ||
        rowData.role.includes(value)
      );
    });
    getPages(filteredArray);
    updateData(filteredArray);
  }

  return (
    <form className="mainDisplaychild">
      <input
        onChange={inputHandler}
        type="text"
        id="search"
        name="search"
        placeholder="Please enter a Search term"
      />
    </form>
  );
};

export default Header;
