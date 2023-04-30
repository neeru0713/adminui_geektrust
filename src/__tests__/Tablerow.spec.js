import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tablerow from '../components/Tablerow';

describe('Tablerow component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      data: [
        { name: 'John Dee', email: 'johndee@example.com', role: 'Developer' },
        { name: 'Jane Doe', email: 'janedoe@example.com', role: 'Designer' },
      ],
      rowData: { name: 'John Doe', email: 'johndoe@example.com', role: 'Developer' },
      index: 0,
      selectedRows: [],
      pageNumber: 1,
      getPages: jest.fn(),
      updateData: jest.fn(),
      updateSelectedRows: jest.fn(),
    };
    wrapper = render(<Tablerow {...props} />);
  });

  it('renders a row with data and edit/delete icons', () => {
    expect(wrapper.container.querySelector('tr')).toBeInTheDocument();
    expect(wrapper.container.querySelectorAll('td').length).toEqual(5);
    expect(wrapper.container.querySelector('#editBtn')).toBeInTheDocument();
    expect(wrapper.container.querySelector('#trashBtn')).toBeInTheDocument();
  });

  it('calls the checkBoxHandler function when checkbox is clicked', () => {
    const checkBox = wrapper.container.querySelector('input[getindex="0"]');
    fireEvent.change(checkBox, { target: { getindex: props.index } });
    setTimeout(()=>{
      expect(props.updateSelectedRows).toHaveBeenCalled();
    },1000)
    
  });

  it('calls the editButtonClickHandler function when edit icon is clicked', () => {
    const editIcon = wrapper.container.querySelector('tr:nth-child(1) #editBtn');
    fireEvent.click(editIcon, { target: { getindex: props.index } });
    let inputs = screen.getAllByPlaceholderText('Modify Text')
    expect(inputs.length).toEqual(3)
  });

  it('calls the updateRowItem function when input is changed', () => {
    const editIcon = wrapper.container.querySelector('tr:nth-child(1) #editBtn');
    fireEvent.click(editIcon, { target: { getindex: props.index } });
    const nameInput = screen.getAllByPlaceholderText('Modify Text', { name: /name/i })[0];
    fireEvent.change(nameInput, { target: { getindex: props.index, name: 'name', value: 'Jane Doe' } });
    expect(props.updateData).toHaveBeenCalled();
  });

  it('calls the deleteRow function when delete icon is clicked', () => {
    const deleteIcon = wrapper.container.querySelector('tr:nth-child(1) #trashBtn');
    fireEvent.click(deleteIcon, { target: { getindex: props.index } });
    expect(props.updateData).toHaveBeenCalled();
  });
});
