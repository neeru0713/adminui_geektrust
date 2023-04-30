import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from '../components/Table';

describe('Table1', () => {
  const props = {
    pageNumber: 1,
    getPages: jest.fn(),
    updateData: jest.fn(),
    updateSelectedRows: jest.fn(),
    data: [
        {
            "id": "1",
            "name": "Aaron Miles",
            "email": "aaron@mailinator.com",
            "role": "member"
        },
        {
            "id": "2",
            "name": "Aishwarya Naik",
            "email": "aishwarya@mailinator.com",
            "role": "member"
        },
        {
            "id": "3",
            "name": "Arvind Kumar",
            "email": "arvind@mailinator.com",
            "role": "admin"
        },
        {
            "id": "4",
            "name": "Caterina Binotto",
            "email": "caterina@mailinator.com",
            "role": "member"
        },
        {
            "id": "5",
            "name": "Chetan Kumar",
            "email": "chetan@mailinator.com",
            "role": "member"
        },
        {
            "id": "6",
            "name": "Jim McClain",
            "email": "jim@mailinator.com",
            "role": "member"
        },
        {
            "id": "7",
            "name": "Mahaveer Singh",
            "email": "mahaveer@mailinator.com",
            "role": "member"
        },
        {
            "id": "8",
            "name": "Rahul Jain",
            "email": "rahul@mailinator.com",
            "role": "admin"
        },
        {
            "id": "9",
            "name": "Rizan Khan",
            "email": "rizan@mailinator.com",
            "role": "member"
        },
        {
            "id": "10",
            "name": "Sarah Potter",
            "email": "sarah@mailinator.com",
            "role": "admin"
        },
        {
            "id": "11",
            "name": "Keshav Muddaiah",
            "email": "keshav@mailinator.com",
            "role": "member"
        },
        {
            "id": "12",
            "name": "Nita Ramesh",
            "email": "nita@mailinator.com",
            "role": "member"
        },
        {
            "id": "13",
            "name": "Julia Hunstman",
            "email": "julia@mailinator.com",
            "role": "member"
        },
        {
            "id": "14",
            "name": "Juan Alonso",
            "email": "juan@mailinator.com",
            "role": "admin"
        },
        {
            "id": "15",
            "name": "Gabriel Montoya",
            "email": "gabriel@mailinator.com",
            "role": "admin"
        },
        {
            "id": "16",
            "name": "Beatrice Iglesias",
            "email": "beatrice@mailinator.com",
            "role": "admin"
        },
        {
            "id": "17",
            "name": "Sarah Symms",
            "email": "sarah.s@mailinator.com",
            "role": "admin"
        },
        {
            "id": "18",
            "name": "Patrick Pinheiro",
            "email": "patrick@mailinator.com",
            "role": "admin"
        },
        {
            "id": "19",
            "name": "Anand Patel",
            "email": "anand@mailinator.com",
            "role": "member"
        },
        {
            "id": "20",
            "name": "Kishore Kalburgi",
            "email": "kishore@mailinator.com",
            "role": "member"
        }
    ],
    selectedRows: []
  };

  beforeEach(() => {
    render(<Table {...props} />);
  });

  it('renders the table with correct headers', () => {

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  it('renders the table rows with correct data', () => {
    
    expect(screen.getByText('Aaron Miles')).toBeInTheDocument();
    expect(screen.getByText('aaron@mailinator.com')).toBeInTheDocument();
    expect(screen.getAllByText('member')[0]).toBeInTheDocument();

    expect(screen.getByText('Aishwarya Naik')).toBeInTheDocument();
    expect(screen.getByText('aishwarya@mailinator.com')).toBeInTheDocument();
    expect(screen.getAllByText('member')[1]).toBeInTheDocument();


    expect(screen.getByText('Arvind Kumar')).toBeInTheDocument();
    expect(screen.getByText('arvind@mailinator.com')).toBeInTheDocument();
    expect(screen.getAllByText('admin')[0]).toBeInTheDocument();


    expect(screen.getByText('Caterina Binotto')).toBeInTheDocument();
    expect(screen.getByText('caterina@mailinator.com')).toBeInTheDocument();
    expect(screen.getAllByText('member')[2]).toBeInTheDocument();


  });

  it('handles the header checkbox click event check and uncheck', () => {
    
    const headerCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(headerCheckbox);
    expect(props.updateSelectedRows).toHaveBeenCalledWith([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    fireEvent.click(headerCheckbox);
    setTimeout(() => {
        expect(props.updateSelectedRows).toHaveBeenCalledWith([]);
    }, 1000)

    
  });

})


describe('Table2', () => {
    const props = {
      pageNumber: 1,
      getPages: jest.fn(),
      updateData: jest.fn(),
      updateSelectedRows: jest.fn(),
      data: [
          {
              "id": "1",
              "name": "Aaron Miles",
              "email": "aaron@mailinator.com",
              "role": "member"
          },
          {
              "id": "2",
              "name": "Aishwarya Naik",
              "email": "aishwarya@mailinator.com",
              "role": "member"
          },
          {
              "id": "3",
              "name": "Arvind Kumar",
              "email": "arvind@mailinator.com",
              "role": "admin"
          },
          {
              "id": "4",
              "name": "Caterina Binotto",
              "email": "caterina@mailinator.com",
              "role": "member"
          },
      ],
      selectedRows: []
    };
  
  it('handles the header checkbox click event when already selected', () => {
    const selectedRows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    render(<Table {...props} selectedRows={selectedRows} />);
    const headerCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(headerCheckbox);
    expect(props.updateSelectedRows).toHaveBeenCalledWith([]);
  });

test('handles the header checkbox click event on different pages and checkbox header selection to be one', () => {
        let headerCheckbox1;
    render(<Table {...props} pageNumber={1} />);
    headerCheckbox1 =screen.getAllByRole('checkbox')[0];

    fireEvent.click(headerCheckbox1);
    expect(props.updateSelectedRows).toHaveBeenCalledWith([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    setTimeout(() => {

        render(<Table {...props} pageNumber={2} />);
        const headerCheckbox2 = screen.getAllByRole('checkbox')[0];
        
        fireEvent.click(headerCheckbox2);
        expect(props.updateSelectedRows).toHaveBeenCalledWith([10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
        expect(headerCheckbox1.checked).toBe(false);
        expect(headerCheckbox2.checked).toBe(true);
    }, 2000); 
  });
});
