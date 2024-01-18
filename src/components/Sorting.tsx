import React from 'react';

interface SortingProps {
  columns: Array<any>;
}

const Sorting: React.FC<SortingProps> = ({ columns }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th
              {...column.getHeaderProps()}
              style={{
                border: '1px solid #ddd',
                padding: '8px',
                textAlign: 'left',
              }}
            >
              {column.render('Header')}
              {column.canSort && (
                <span
                  {...column.getSortByToggleProps()}
                  style={{ marginLeft: '8px', cursor: 'pointer' }}
                >
                  {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                </span>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default Sorting;
