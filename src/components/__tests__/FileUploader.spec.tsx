import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { FileUploader } from '../FileUploader';

describe(__filename, () => {
  const onFileUploadMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    const { getByText, getByLabelText } = render(
      <FileUploader onFileUpload={onFileUploadMock} />
    );

    const dropzoneText = getByText('Drag and drop the funnel JSON here');
    const browseButton = getByLabelText('Browse file');

    expect(dropzoneText).toBeInTheDocument();
    expect(browseButton).toBeInTheDocument();
  });

  test('handles file upload through file input', async () => {
    const { getByLabelText } = render(<FileUploader onFileUpload={onFileUploadMock} />);
    const input = getByLabelText('Browse file');

    const file = new File(['{"name":"Funnel"}'], 'funnel.json', { type: 'application/json' });

    fireEvent.change(input, {
      target: {
        files: [file],
      },
    });

    await waitFor(() => {
      expect(onFileUploadMock).toHaveBeenCalledTimes(1);
      expect(onFileUploadMock).toHaveBeenCalledWith({ name: 'Funnel' });
    })
  });
});
