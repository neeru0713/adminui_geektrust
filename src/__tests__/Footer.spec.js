/* eslint-disable no-undef */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../components/Footer";

describe("Footer", () => {
  const mockGetPages = jest.fn();
  const mockUpdateData = jest.fn();
  const mockUpdateSelectedRows = jest.fn();
  const mockUpdatePageNumber = jest.fn();

  const props = {
    pageNumber: 1,
    pageButtons: [1, 2, 3, 4, 5],
    getPages: mockGetPages,
    updateData: mockUpdateData,
    updateSelectedRows: mockUpdateSelectedRows,
    data: [
      {
        id: "1",
        name: "Aaron Miles",
        email: "aaron@mailinator.com",
        role: "member",
      },
      {
        id: "2",
        name: "Aishwarya Naik",
        email: "aishwarya@mailinator.com",
        role: "member",
      },
      {
        id: "3",
        name: "Arvind Kumar",
        email: "arvind@mailinator.com",
        role: "admin",
      },
      {
        id: "4",
        name: "Caterina Binotto",
        email: "caterina@mailinator.com",
        role: "member",
      },
      {
        id: "5",
        name: "Chetan Kumar",
        email: "chetan@mailinator.com",
        role: "member",
      },
      {
        id: "6",
        name: "Jim McClain",
        email: "jim@mailinator.com",
        role: "member",
      },
      {
        id: "7",
        name: "Mahaveer Singh",
        email: "mahaveer@mailinator.com",
        role: "member",
      },
      {
        id: "8",
        name: "Rahul Jain",
        email: "rahul@mailinator.com",
        role: "admin",
      },
      {
        id: "9",
        name: "Rizan Khan",
        email: "rizan@mailinator.com",
        role: "member",
      },
      {
        id: "10",
        name: "Sarah Potter",
        email: "sarah@mailinator.com",
        role: "admin",
      },
      {
        id: "11",
        name: "Keshav Muddaiah",
        email: "keshav@mailinator.com",
        role: "member",
      },
      {
        id: "12",
        name: "Nita Ramesh",
        email: "nita@mailinator.com",
        role: "member",
      },
      {
        id: "13",
        name: "Julia Hunstman",
        email: "julia@mailinator.com",
        role: "member",
      },
      {
        id: "14",
        name: "Juan Alonso",
        email: "juan@mailinator.com",
        role: "admin",
      },
      {
        id: "15",
        name: "Gabriel Montoya",
        email: "gabriel@mailinator.com",
        role: "admin",
      },
      {
        id: "16",
        name: "Beatrice Iglesias",
        email: "beatrice@mailinator.com",
        role: "admin",
      },
      {
        id: "17",
        name: "Sarah Symms",
        email: "sarah.s@mailinator.com",
        role: "admin",
      },
      {
        id: "18",
        name: "Patrick Pinheiro",
        email: "patrick@mailinator.com",
        role: "admin",
      },
      {
        id: "19",
        name: "Anand Patel",
        email: "anand@mailinator.com",
        role: "member",
      },
      {
        id: "20",
        name: "Kishore Kalburgi",
        email: "kishore@mailinator.com",
        role: "member",
      },
      {
        id: "21",
        name: "Rebecca Norris",
        email: "rebecca@mailinator.com",
        role: "member",
      },
      {
        id: "22",
        name: "Özgür Başak",
        email: "ozgur@mailinator.com",
        role: "member",
      },
      {
        id: "23",
        name: "Robin Andersen",
        email: "robin@mailinator.com",
        role: "member",
      },
      {
        id: "24",
        name: "Nandini Kumar",
        email: "nandini@mailinator.com",
        role: "member",
      },
      {
        id: "25",
        name: "Nikita Smith",
        email: "nikita@mailinator.com",
        role: "member",
      },
      {
        id: "26",
        name: "Colton Doe",
        email: "colton@mailinator.com",
        role: "member",
      },
      {
        id: "27",
        name: "Alain Senna",
        email: "alain@mailinator.com",
        role: "member",
      },
      {
        id: "28",
        name: "Ashwin Jain",
        email: "ashwin@mailinator.com",
        role: "member",
      },
      {
        id: "29",
        name: "Seema Bhatt",
        email: "seema@mailinator.com",
        role: "member",
      },
      {
        id: "30",
        name: "Kayla Scarpinski",
        email: "kayla@mailinator.com",
        role: "member",
      },
      {
        id: "31",
        name: "Ajay Ghosh",
        email: "ajay@mailinator.com",
        role: "member",
      },
      {
        id: "32",
        name: "Chris Lindberg",
        email: "chris@mailinator.com",
        role: "member",
      },
      {
        id: "33",
        name: "Christina Mourujärvi",
        email: "christina@mailinator.com",
        role: "member",
      },
      {
        id: "34",
        name: "Mikhail Bill",
        email: "mikhail@mailinator.com",
        role: "member",
      },
      {
        id: "35",
        name: "Eino Göregen",
        email: "eino@mailinator.com",
        role: "member",
      },
      {
        id: "36",
        name: "Zachariah Johansson",
        email: "zacharaiah@mailinator.com",
        role: "member",
      },
      {
        id: "37",
        name: "Aimaan Mohammed",
        email: "aimaan@mailinator.com",
        role: "admin",
      },
      {
        id: "38",
        name: "Aika Tsunoda",
        email: "aika@mailinator.com",
        role: "member",
      },
      {
        id: "39",
        name: "Kimiko Minamoto",
        email: "kimiko@mailinator.com",
        role: "member",
      },
      {
        id: "40",
        name: "Alyona Baginskaite",
        email: "alyona@mailinator.com",
        role: "member",
      },
      {
        id: "41",
        name: "Anirudh Mukherjee",
        email: "anirudh@mailinator.com",
        role: "member",
      },
      {
        id: "42",
        name: "Alyona Gov",
        email: "alyonagov@mailinator.com",
        role: "member",
      },
      {
        id: "43",
        name: "Robin Singh",
        email: "robin@mailinator.com",
        role: "member",
      },
      {
        id: "44",
        name: "Vijay Vasudevan",
        email: "vijayv@mailinator.com",
        role: "member",
      },
      {
        id: "45",
        name: "Steve Smith",
        email: "steve@mailinator.com",
        role: "member",
      },
      {
        id: "46",
        name: "Anirudh Banerjee",
        email: "anirudhb@mailinator.com",
        role: "member",
      },
    ],
    selectedRows: [],
    updatePageNumber: mockUpdatePageNumber,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("render Footer component", () => {
    render(<Footer
  pageNumber={props.pageNumber}
  pageButtons={props.pageButtons}
  getPages={props.getPages}
  updateData={props.updateData}
  updateSelectedRows={props.updateSelectedRows}
  data={props.data}
  selectedRows={props.selectedRows}
  updatePageNumber= {props.updatePageNumber}
  />
);
  });

  it('calls deleteSelectedRows function when the "Delete Selected" button is clicked', () => {
    render(<Footer
  pageNumber={props.pageNumber}
  pageButtons={props.pageButtons}
  getPages={props.getPages}
  updateData={props.updateData}
  updateSelectedRows={props.updateSelectedRows}
  data={props.data}
  selectedRows={props.selectedRows}
  updatePageNumber= {props.updatePageNumber}
  />
);
    fireEvent.click(screen.getByText("Delete Selected"));
    expect(mockGetPages).toHaveBeenCalledTimes(1);
    expect(mockUpdateData).toHaveBeenCalledTimes(1);
    expect(mockUpdateSelectedRows).toHaveBeenCalledTimes(1);
  });

  it("calls NavbuttonHandler function when a page button is clicked", () => {
    render(<Footer
  pageNumber={props.pageNumber}
  pageButtons={props.pageButtons}
  getPages={props.getPages}
  updateData={props.updateData}
  updateSelectedRows={props.updateSelectedRows}
  data={props.data}
  selectedRows={props.selectedRows}
  updatePageNumber= {props.updatePageNumber}
  />
);
    fireEvent.click(screen.getByText("2"));
    setTimeout(() => {
      expect(mockUpdatePageNumber).toHaveBeenCalledWith(2);
    }, 1000);
  });

  it('calls NavbuttonHandler function when the "<<" button is clicked', () => {
    render(<Footer
  pageNumber={props.pageNumber}
  pageButtons={props.pageButtons}
  getPages={props.getPages}
  updateData={props.updateData}
  updateSelectedRows={props.updateSelectedRows}
  data={props.data}
  selectedRows={props.selectedRows}
  updatePageNumber= {props.updatePageNumber}
  />
);
    fireEvent.click(screen.getByText("<<"));
    setTimeout(() => {
      expect(mockUpdatePageNumber).toHaveBeenCalledWith(1);
    }, 1000);
  });

  it('calls NavbuttonHandler function when the "<" button is clicked', () => {
    render(<Footer
  pageNumber={props.pageNumber}
  pageButtons={props.pageButtons}
  getPages={props.getPages}
  updateData={props.updateData}
  updateSelectedRows={props.updateSelectedRows}
  data={props.data}
  selectedRows={props.selectedRows}
  updatePageNumber= {props.updatePageNumber}
  />
);
    fireEvent.click(screen.getByText("<"));
    setTimeout(() => {
      expect(mockUpdatePageNumber).toHaveBeenCalledWith(1);
    }, 1000);
  });

  it('calls NavbuttonHandler function when the ">" button is clicked', () => {
    render(<Footer
  pageNumber={props.pageNumber}
  pageButtons={props.pageButtons}
  getPages={props.getPages}
  updateData={props.updateData}
  updateSelectedRows={props.updateSelectedRows}
  data={props.data}
  selectedRows={props.selectedRows}
  updatePageNumber= {props.updatePageNumber}
  />
);
    fireEvent.click(screen.getByText(">"));
    setTimeout(() => {
      expect(mockUpdatePageNumber).toHaveBeenCalledWith(2);
    }, 1000);
  });

  it('calls NavbuttonHandler function when the ">>" button is clicked', () => {
    render(<Footer
  pageNumber={props.pageNumber}
  pageButtons={props.pageButtons}
  getPages={props.getPages}
  updateData={props.updateData}
  updateSelectedRows={props.updateSelectedRows}
  data={props.data}
  selectedRows={props.selectedRows}
  updatePageNumber= {props.updatePageNumber}
  />
);
    fireEvent.click(screen.getByText(">>"));
    setTimeout(() => {
      expect(mockUpdatePageNumber).toHaveBeenCalledWith(5);
    }, 1000);
  });

  it('disables the "<<" and "<" buttons when the page number is 1', () => {
    const pageNumber = 1;
    render(<Footer
      pageNumber={pageNumber}
      pageButtons={props.pageButtons}
      getPages={props.getPages}
      updateData={props.updateData}
      updateSelectedRows={props.updateSelectedRows}
      data={props.data}
      />);
    expect(screen.getByText("<<")).toBeDisabled();
    expect(screen.getByText("<")).toBeDisabled();
  });

  it('disables the ">>" and ">" buttons when the page number is the last page', () => {
    const pageNumber = 5;
    render(<Footer
      pageNumber={pageNumber}
      pageButtons={props.pageButtons}
      getPages={props.getPages}
      updateData={props.updateData}
      updateSelectedRows={props.updateSelectedRows}
      data={props.data}
      />);
    setTimeout(() => {
      expect(screen.getByText(">>")).toBeDisabled();
      expect(screen.getByText(">")).toBeDisabled();
    }, 1000);
  });
});
