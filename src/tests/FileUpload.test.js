import { render, screen } from '@testing-library/react';
import FileUpload from '../components/FileUpload';

test('renders file upload input', () => {
    render(<FileUpload />);
    const fileUploadElement = screen.getByText(/Upload File/i);
    expect(fileUploadElement).toBeInTheDocument();
});
