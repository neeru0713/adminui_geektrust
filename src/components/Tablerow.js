import React, { useState } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import PropTypes from 'prop-types';

function Tablerow({
  data,
  rowData,
  index,
  selectedRows,
  pageNumber,
  getPages,
  updateData,
  updateSelectedRows,
}) {

  Tablerow.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      })
    ).isRequired,
    rowData: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    selectedRows: PropTypes.arrayOf(PropTypes.number).isRequired,
    pageNumber: PropTypes.number.isRequired,
    getPages: PropTypes.func.isRequired,
    updateData: PropTypes.func.isRequired,
    updateSelectedRows: PropTypes.func.isRequired,
  };
      
  const [editingRow, setEditingRow] = useState(-1);

  // Used to update state when a checkbox of a row is checked/unchecked
  function checkBoxHandler(event) {
    let i = +event.target.getAttribute("data-index");
    let base = (pageNumber - 1) * 10;
    let index = i + base;
    console.log(index);
    if (selectedRows.includes(index)) {
      let filteredArray = selectedRows.filter((rowData) => {
        return rowData !== index;
      });
      updateSelectedRows([...filteredArray]);
    } else {
      updateSelectedRows([...selectedRows, ...[index]]);
    }

    console.log(selectedRows);
  }

  // used to convert the text to input editable text when edit button is clicked for a row
  function editButtonClickHandler(event) {
    let index = parseInt(event.target.getAttribute("data-index"));
    console.log("index : ", index);
    setEditingRow(index);
    console.log(editingRow);
  }

  // Used to update the value of a row (any column) when user inputs some text 
  function updateRowItem(event) {
    let keyname = event.target.name;
    let index = parseInt(event.target.getAttribute("data-index"));
    data[index][keyname] = event.target.value;
    updateData(data);
  }

  // Used to delete a row from the data table based on index when the user clicks on trash icon for a row
  function deleteRow(event) {
    let indexToRemove = parseInt(event.target.getAttribute("data-index"));
    let filteredArray = data.filter((rowData, index) => {
      return index !== indexToRemove;
    });
    getPages(filteredArray);
    updateData(filteredArray);
  }

  return (
    <tr className={selectedRows.includes(index) ? "graybg w100" : "w100"}>
      <td>
        <input
          type="checkbox"
          onChange={checkBoxHandler}
          data-index={index}
          checked={
            selectedRows.includes(index + (pageNumber - 1) * 10) ? true : false
          }
        />
      </td>
      <td>
        {editingRow === index ? (
          <input
            data-index={index}
            onChange={updateRowItem}
            type="text"
            name="name"
            placeholder="Modify Text"
          />
        ) : (
          rowData.name
        )}
      </td>
      <td>
        {editingRow === index ? (
          <input
            data-index={index}
            onChange={updateRowItem}
            type="text"
            name="email"
            placeholder="Modify Text"
          />
        ) : (
          rowData.email
        )}
      </td>
      <td>
        {editingRow === index ? (
          <input
            data-index={index}
            onChange={updateRowItem}
            type="text"
            name="role"
            placeholder="Modify Text"
          />
        ) : (
          rowData.role
        )}
      </td>

      <td className="icon-group">
        <FiEdit
          data-index={index}
          onClick={editButtonClickHandler}
          id="editBtn"
        />
        <BiTrashAlt
          data-index={index}
          onClick={deleteRow}
          className="deleteIconRed"
          id="trashBtn"
        />
      </td>
    </tr>
  );
}

export default Tablerow;
