import React from 'react'

export const Header = ({constData, getPages, updateData}) => {

    function inputHandler(event){
        let value = event.target.value;
        let filteredArray = constData.filter((rowData)=>{
            return rowData.name.includes(value) || rowData.email.includes(value) || rowData.role.includes(value);
        })
        getPages(filteredArray)
        updateData(filteredArray)
    }

    return (
    <form className='mainDisplaychild'>
        <label></label>
        <input onChange={inputHandler} type="text" id="search" name="search" placeholder="Enter your search term here"/>
    </form>
    )
}

export default Header;
