import React, { useState } from 'react';
import { BiTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
function Tablerow({
    data,
    rowData, 
    index, 
    selectedRows, 
    pageNumber, 
    getPages,
    updateData, 
    updateSelectedRows
}) {

    const [editingRow, setEditingRow] = useState(-1);

    function checkBoxHandler(event){
        let i = +event.target.getAttribute("getindex")
        let base = (pageNumber-1)*10
        let index = i + base;
        console.log(index)
        if(selectedRows.includes(index)){
            let filteredArray = selectedRows.filter((rowData)=>{
                return rowData !== index;
            })
            updateSelectedRows([...filteredArray]);
        } else {
            updateSelectedRows([...selectedRows, ...[index]])
        }
        
       console.log(selectedRows)
    }

    function editButtonClickHandler(event){
        let index = parseInt(event.target.getAttribute("getindex"))
        console.log("index : ", index)
        setEditingRow(index)
        console.log(editingRow)
    }

    function updateRowItem(event){
        let keyname = event.target.name
        let index = parseInt(event.target.getAttribute("getindex"));
        data[index][keyname] = event.target.value;
        updateData(data)
    }

    function deleteRow(event){
        
        let indexToRemove = parseInt(event.target.getAttribute("getindex"));
        let filteredArray = data.filter((rowData, index)=>{
            return index !== indexToRemove;
        })
        getPages(filteredArray)
        updateData(filteredArray)
    }

    return (
    
        <tr className={selectedRows.includes(index) ? "graybg w100" : "w100"}>
            <td><input type="checkbox" onChange={checkBoxHandler} getindex={index} checked={selectedRows.includes(index+ (pageNumber-1)*10 ) ? true : false} /></td> 
            <td>
                {editingRow === index? (<input getindex={index} onChange={updateRowItem} type="text" name="name" placeholder="Modify Text"/>):rowData.name}
            </td>
            <td>
                {editingRow === index? (<input getindex={index} onChange={updateRowItem} type="text" name="email" placeholder="Modify Text"/>):rowData.email}
            </td>
            <td>
                {editingRow === index? (<input getindex={index} onChange={updateRowItem} type="text" name="role" placeholder="Modify Text"/>):rowData.role}
            </td>

            <td className='icon-group'> 
                <FiEdit getindex={index} onClick={editButtonClickHandler} id="editBtn"/>
                <BiTrashAlt getindex={index} onClick={deleteRow} className="deleteIconRed" id="trashBtn"/>
            </td>
        </tr>
    
    )
}

export default Tablerow;
