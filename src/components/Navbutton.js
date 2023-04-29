import React from 'react'

const Navbutton = ({NavbuttonHandler, pageNumber, page}) => {
  return (
    <button onClick={NavbuttonHandler} className= {pageNumber === page ? "whitebg round-button" : "bluebg round-button"} >{page}</button>
  )
}

export default Navbutton