import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders Admintable component without crashing', () => {
    render(<Admintable />);
});
  
test('fetchData function retrieves data and updates state variables', async () => {
    const mockData = [{ name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' }];
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });
  
    await act(async () => {
      render(<Admintable />);
    });
  
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
  
    const nameElement = screen.getByText(/John Doe/i);
    expect(nameElement).toBeInTheDocument();
  
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
  
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/role/i)).toBeInTheDocument();
  
    expect(screen.getByText(/Actions/i)).toBeInTheDocument();
});

  

test('inputHandler function filters data based on user input', () => {
    const mockData = [{ name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' }, { name: 'Jane Doe', email: 'janedoe@example.com', role: 'User' }];

    const { getByLabelText } = render(<Admintable />);
    const searchInput = getByLabelText(/search/i);

    fireEvent.change(searchInput, { target: { value: 'jane' } });

    const janeDoeElement = screen.getByText(/Jane Doe/i);
    expect(janeDoeElement).toBeInTheDocument();
    expect(screen.queryByText(/John Doe/i)).not.toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: '' } });

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
});

  


test('deleteRow function removes a row from the table', async () => {
    const mockData = [{ name: 'John Doe', email: 'johndoe@example.com', role: 'Admin' }, { name: 'Jane Doe', email: 'janedoe@example.com', role: 'User' }];

    jest.spyOn(global, 'fetch').mockResolvedValue({
        json: jest.fn().mockResolvedValue(mockData),
    });

    await act(async () => {
        render(<Admintable />);
    });

    const deleteButton = screen.getAllByTestId('delete-button')[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/John Doe/i)).not.toBeInTheDocument();
});

  


