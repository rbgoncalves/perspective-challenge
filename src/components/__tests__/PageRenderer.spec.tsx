import React from 'react';
import { render } from '@testing-library/react';
import { PageRenderer } from '../PageRenderer';
import { Page } from '@/types';

const mockPage = {
  id: 'page1',
  blocks: [
    {
      id: 'text1',
      type: 'text',
      text: 'Welcome to Page 1',
    },
    {
      id: 'image1',
      type: 'image',
      src: 'image-url',
    },
    {
      id: 'list1',
      type: 'list',
      items: [
        {
          title: 'Item 1',
          description: 'Description 1',
        },
      ],
    },
    {
      id: 'button1',
      type: 'button',
      text: 'Click Me',
    },
  ],
} as Page;

describe(__filename, () => {
  test('renders text block correctly', () => {
    const { getByText } = render(<PageRenderer page={mockPage} />);
    expect(getByText('Welcome to Page 1')).toBeInTheDocument();
  });

  test('renders image block correctly', () => {
    const { getByAltText } = render(<PageRenderer page={mockPage} />);
    expect(getByAltText('Image')).toBeInTheDocument();
  });

  test('renders list block correctly', () => {
    const { getByText } = render(<PageRenderer page={mockPage} />);
    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
  });

  test('renders button block correctly', () => {
    const { getByText } = render(<PageRenderer page={mockPage} />);
    expect(getByText('Click Me')).toBeInTheDocument();
  });
});
