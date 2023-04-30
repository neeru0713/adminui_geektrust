import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Table from "./Table";

function Adminuitable() {
  const [data, setData] = useState([]);
  const [constData, setConstData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedRows, setSelectedRows] = useState([]);
  const [pageButtons, setPageButtons] = useState([]);

  //   fetches api response and sets some state variables
  async function fetchData () {
    try {
      const response = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      const jsonData = await response.json();
      getPages(jsonData);
      setData(jsonData);
      setConstData(jsonData);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
  fetchData();
  }, []);

//   sets the pageButtons array with number of buttons to be displayed in ui based on data length
  function getPages(arr) {
    let len = arr.length;
    let pages = Math.ceil(len / 10);
    setPageButtons(Array.from({ length: pages }, (_, i) => i + 1));
  }

//  These 3 functions are provided to child components for them to update the state of this parent component
  function updateData(val) {
    setData(val);
  }

  function updateSelectedRows(val) {
    setSelectedRows(val);
  }

  function updatePageNumber(val) {
    setPageNumber(val);
  }

  return (
    <div className="mainDisplay">
      <Header
        constData={constData}
        getPages={getPages}
        updateData={updateData}
      ></Header>

      <Table
        pageNumber={pageNumber}
        getPages={getPages}
        updateData={updateData}
        updateSelectedRows={updateSelectedRows}
        data={data}
        selectedRows={selectedRows}
      ></Table>

      <Footer
        pageNumber={pageNumber}
        pageButtons={pageButtons}
        getPages={getPages}
        updateData={updateData}
        updateSelectedRows={updateSelectedRows}
        data={data}
        selectedRows={selectedRows}
        updatePageNumber={updatePageNumber}
      ></Footer>
    </div>
  );
}

export default Adminuitable;
