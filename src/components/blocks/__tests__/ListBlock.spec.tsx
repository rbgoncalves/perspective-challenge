import React from 'react';
import { render } from '@testing-library/react';
import { ListBlockPresenter } from '../ListBlock';
import { ListBlock } from '@/types';

const mockListBlock: ListBlock = {
  id: '1',
  type: 'list',
  items: [
    {
      title: 'Item 1',
      description: 'Description 1',
      src: 'item1.jpg',
    },
    {
      title: 'Item 2',
      description: 'Description 2',
      src: 'item2.jpg',
    },
  ],
};

describe(__filename, () => {
  test('renders list items correctly', () => {
    const { getByText, getAllByRole, getAllByAltText } = render(
      <ListBlockPresenter block={mockListBlock} />
    );

    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(mockListBlock.items.length);

    mockListBlock.items.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument();
      expect(getByText(item.description)).toBeInTheDocument();
    });

    const itemImages = getAllByAltText(/Item \d/);
    expect(itemImages).toHaveLength(mockListBlock.items.length);
  });

  test('handles missing item src gracefully', () => {
    const mockListBlockWithoutSrc: ListBlock = {
      id: '2',
      type: 'list',
      items: [
        {
          title: 'Item 3',
          description: 'Description 3',
        },
        {
          title: 'Item 4',
          description: 'Description 4',
          src: 'item4.jpg',
        },
      ],
    };

    const { queryByAltText } = render(
      <ListBlockPresenter block={mockListBlockWithoutSrc} />
    );

    expect(queryByAltText(/Item 3/)).toBeNull();

    expect(queryByAltText(/Item 4/)).not.toBeNull();
  });
});
