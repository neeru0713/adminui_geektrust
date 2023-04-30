import React, { useState } from "react";
import Tablerow from "./Tablerow";
import PropTypes from 'prop-types';
export const Table = ({
  pageNumber,
  getPages,
  updateData,
  updateSelectedRows,
  data,
  selectedRows,
}) => {
  Table.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
        })
    ).isRequired,
    selectedRows: PropTypes.arrayOf(PropTypes.number).isRequired,
    pageNumber: PropTypes.number.isRequired,
    getPages: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
    updateSelectedRows: PropTypes.func.isRequired,
  };
  const [headerCheckBoxPageNumber, setHeaderCheckBoxPageNumber] = useState(0);
  const [headerCheckBoxSelected, setHeaderCheckBoxSelected] = useState(false);

  // Used to check/uncheck the required checkboxes when header checkbox is checked/unchecked
  function headerCheckBoxClickHandler() {
    
    if (pageNumber !== headerCheckBoxPageNumber) {
      if (!headerCheckBoxSelected) {
        setHeaderCheckBoxSelected(true);
      } else {
        setHeaderCheckBoxSelected(false);
      }
    }

    setHeaderCheckBoxPageNumber(pageNumber);
    let si = (pageNumber - 1) * 10;
    let ei = pageNumber * 10 - 1;
    setHeaderCheckBoxSelected(true);
    console.log(si);
    if (selectedRows.includes(si)) {
      updateSelectedRows([]);
      setHeaderCheckBoxSelected(false);
    } else {
      let arr = [];
      for (let i = si; i <= ei; i++) {
        arr.push(i);
      }
      console.log(arr);
      updateSelectedRows([...arr]);
      console.log(selectedRows);
    }
  }

  return (
    <table className="mainDisplaychild">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              onChange={headerCheckBoxClickHandler}
              checked={
                headerCheckBoxPageNumber === pageNumber &&
                headerCheckBoxSelected
              }
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {data
          .slice((pageNumber - 1) * 10, pageNumber * 10)
          .map((rowData, index) => (
            <Tablerow
              key={rowData.id}
              data={data}
              rowData={rowData}
              index={index}
              selectedRows={selectedRows}
              pageNumber={pageNumber}
              getPages={getPages}
              updateData={updateData}
              updateSelectedRows={updateSelectedRows}
            ></Tablerow>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
