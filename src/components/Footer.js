import React, { useState } from "react";
import Navbutton from "./Navbutton";
import PropTypes from 'prop-types';
const Footer = ({
  pageNumber,
  pageButtons,
  getPages,
  updateData,
  updateSelectedRows,
  data,
  selectedRows,
  updatePageNumber,
}) => {

  Footer.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    pageButtons: PropTypes.array.isRequired,
    getPages: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
    updateSelectedRows: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    selectedRows: PropTypes.array.isRequired,
    updatePageNumber: PropTypes.func.isRequired,
  };

  const [backBuffer, setBackBuffer] = useState(0);
  const [frontBuffer, setFrontBuffer] = useState(2);

  // Used when user selects multiple checkboxes and hits delete selected button , to remove the entries from data
  function deleteSelectedRows() {
    let filteredArray = data.filter((rowData, index) => {
      return !selectedRows.includes(index);
    });
    getPages(filteredArray);
    updateData(filteredArray);
    updateSelectedRows([]);
  }

  // Used to load the data for a particular page page when a Page button is clicked 
  function NavbuttonHandler(event) {
    let val = event.target.innerText;
    let num = pageNumber;

    if (val === ">") {
      console.log(pageNumber);
      num++;
      updatePageNumber(pageNumber + 1);
    } else if (val === ">>") {
      updatePageNumber(pageButtons[pageButtons.length - 1]);
      num = pageButtons[pageButtons.length - 1];
    } else if (val === "<") {
      updatePageNumber(pageNumber - 1);
      num--;
    } else if (val === "<<") {
      updatePageNumber(1);
      num = 1;
    } else {
      num = parseInt(val);
      updatePageNumber(num);
    }

    let backBuf = num - 1;
    setBackBuffer(backBuf);
    let frontBuf = 5 - num;
    setFrontBuffer(frontBuf);
  }

  return (
    <div className="container mainDisplaychild">
      <button onClick={deleteSelectedRows} className="delete-btn">
        Delete Selected{" "}
      </button>
      <div className="btn-group">
        <button
          onClick={NavbuttonHandler}
          className={` ${
            pageNumber === "&lt;&lt;"
              ? "whitebg round-button"
              : "bluebg round-button"
          } ${backBuffer < 2 ? "disabledbtn" : ""} `}
          disabled={backBuffer < 2 ? true : false}
        >
          &lt;&lt;
        </button>
        <button
          onClick={NavbuttonHandler}
          className={` ${
            pageNumber === "&lt;"
              ? "whitebg round-button"
              : "bluebg round-button"
          } ${backBuffer < 1 ? "disabledbtn" : ""} `}
          disabled={backBuffer < 1 ? true : false}
        >
          &lt;
        </button>
        {pageButtons.map((page, index) => (
          <Navbutton
            key={index}
            NavbuttonHandler={NavbuttonHandler}
            pageNumber={pageNumber}
            page={page}
          ></Navbutton>
        ))}

        <button
          onClick={NavbuttonHandler}
          className={` ${
            pageNumber === "&gt;"
              ? "whitebg round-button"
              : "bluebg round-button"
          } ${frontBuffer < 1 ? "disabledbtn" : ""} `}
          disabled={frontBuffer < 1 ? true : false}
        >
          &gt;
        </button>
        <button
          onClick={NavbuttonHandler}
          className={` ${
            pageNumber === "&gt;&gt;"
              ? "whitebg round-button"
              : "bluebg round-button"
          } ${frontBuffer < 2 ? "disabledbtn" : ""} `}
          disabled={frontBuffer < 2 ? true : false}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default Footer;
