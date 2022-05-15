import { queryByTestId, render, screen } from '@testing-library/react';
import FileUpload from '../components/FileUpload';

test('renders file upload input', () => {
    render(<FileUpload />);
    const fileUploadElement = screen.getByTestId(/fileUpload/i);
    expect(fileUploadElement).toBeTruthy();
});
