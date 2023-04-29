
import React, { useState, useEffect } from 'react';
import { BiTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import Navbutton from "./Navbutton"

function Admintable() {
    const [data, setData] = useState([]);
    const [constData, setConstData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [backBuffer, setBackBuffer] = useState(0);
    const [selectedRows, setSelectedRows] = useState([]);
    const [frontBuffer, setFrontBuffer] = useState(2);
    const [pageButtons, setPageButtons] = useState([]);
    const [editingRow, setEditingRow] = useState(-1);

    useEffect(() => {
        fetchData();

    }, []);

    function getPages(arr){
        let len = arr.length;
        let pages = Math.ceil(len/10);
        setPageButtons(Array.from({ length: pages }, (_, i) => i + 1)) 
    }

    const fetchData = async () => {
        try{
            const response = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
            const jsonData = await response.json()
            getPages(jsonData)
            setData(jsonData)
            setConstData(jsonData)
        } catch(e){
            console.log(e)
        }
    }

    function NavbuttonHandler (event){
    //    console.log(event.target.innerText);
        
        let val = event.target.innerText;
        let num = pageNumber;

        if (val === '>') {
            console.log(pageNumber)
            num++;
            setPageNumber(pageNumber + 1);
        }
        else if (val === '>>') {
            setPageNumber(pageButtons[pageButtons.length-1]);
            num = pageButtons[pageButtons.length-1]
        }
        else if(val === '<'){
            setPageNumber(pageNumber-1);
            num--;
        }
        else if(val === '<<'){
            setPageNumber(1);
            num = 1;
        }
        else {
            num = parseInt(val)
            setPageNumber(num);
            
        }

        let backBuf = num-1;
        setBackBuffer( backBuf);
        let frontBuf = 5-num;
        setFrontBuffer(frontBuf);
    }

    function inputHandler(event){
        let value = event.target.value;
        let filteredArray = constData.filter((rowData)=>{
            return rowData.name.includes(value) || rowData.email.includes(value) || rowData.role.includes(value);
        })
        getPages(filteredArray)
        setData(filteredArray)
    }
    function deleteRow(event){
        let indexToRemove = event.target.getAttribute("getindex");
        let filteredArray = data.filter((rowData, index)=>{
            return index != indexToRemove;
        })
        getPages(filteredArray)
        setData(filteredArray)
    }

    function checkBoxHandler(event){
        let index = +event.target.getAttribute("getindex")
        console.log(index)
        if(selectedRows.includes(index)){
            let filteredArray = selectedRows.filter((rowData)=>{
                return rowData != index;
            })
            setSelectedRows([...filteredArray]);
        } else {
            setSelectedRows([...selectedRows, ...[index]])
        }
        
       console.log(selectedRows)
    }

    function deleteSelectedRows(){
        let filteredArray = data.filter((rowData, index)=>{
            return !selectedRows.includes(index);
        })
        getPages(filteredArray)
        setData(filteredArray)   
        setSelectedRows([]) 
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
        setData(data)
    }

    function headerCheckBoxClickHandler(event) {
        debugger
        let si = (pageNumber-1)*10;
        let ei = (pageNumber)*10 - 1
        console.log(si)
        if(selectedRows.includes(si)){
            setSelectedRows([])
        } else {
            let arr = [];
            for(let i=si; i<=ei; i++){
                arr.push(i)
            }
            console.log(arr)
            setSelectedRows([...arr])
            console.log(selectedRows)
        }
    }
        
        
  
    return (
        <div className="mainDisplay">
            <form className='mainDisplaychild'>
                <label></label>
                <input onChange={inputHandler} type="text" id="search" name="search" placeholder="Enter your search term here"/>
            </form>
            
            <table className='mainDisplaychild'>
                <thead>
                    <tr>
                        <th><input type="checkbox" onClick={headerCheckBoxClickHandler}/></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                
                {data.slice((pageNumber-1)*10,pageNumber*10).map((rowData, index) =>(
                    <tr className={selectedRows.includes(index) ? "graybg" : ""}>
                        <td><input type="checkbox" onChange={checkBoxHandler} getindex={index} checked={selectedRows.includes(index ) ? true : false} />{index}</td> 
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
                            <FiEdit getindex={index} onClick={editButtonClickHandler}/>
                            <BiTrashAlt getindex={index} onClick={deleteRow} className="deleteIconRed"/>
                        </td>
                    </tr>

                ))}

                </tbody>
            </table>

            <div className="container mainDisplaychild">
                <button onClick={deleteSelectedRows} className="delete-btn">Delete Selected </button>
                <div className="btn-group">

                    <button onClick={NavbuttonHandler} className={` ${pageNumber === "&lt;&lt;" ? "whitebg round-button" : "bluebg round-button"} ${backBuffer<2?"disabledbtn":""} `} disabled={backBuffer<2?true:false} >&lt;&lt;</button> 
                    <button onClick={NavbuttonHandler} className={` ${pageNumber === "&lt;" ? "whitebg round-button" : "bluebg round-button"} ${backBuffer<1?"disabledbtn":""} `}  disabled={backBuffer<1?true:false} >&lt;</button>
                    {pageButtons.map((page)=>(
                        <button onClick={NavbuttonHandler} className= {pageNumber === page ? "whitebg round-button" : "bluebg round-button"} >{page}</button>
                    ))}

                    <button onClick={NavbuttonHandler} className={` ${pageNumber === "&gt;" ? "whitebg round-button" : "bluebg round-button"} ${frontBuffer<1?"disabledbtn":""} `} disabled={frontBuffer<1?true:false}>&gt;</button>
                    <button onClick={NavbuttonHandler} className={` ${pageNumber === "&gt;&gt;" ? "whitebg round-button" : "bluebg round-button"} ${frontBuffer<2?"disabledbtn":""} `} disabled={frontBuffer<2?true:false}>&gt;&gt;</button>

                </div>    
            </div>
        </div>  
    );

}

export default Admintable;
