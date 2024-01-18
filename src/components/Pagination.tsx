import React from 'react';

interface PaginationProps {
	pageIndex: number;
	pageSize: number;
	pageCount: number;
	canPreviousPage: boolean;
	canNextPage: boolean;
	gotoPage: (page: number) => void;
	nextPage: () => void;
	previousPage: () => void;
	setPageSize: (pageSize: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
	pageSize,
	pageIndex,
	pageCount,
	canPreviousPage,
	canNextPage,
	gotoPage,
	nextPage,
	previousPage,
	setPageSize
}) => {
	return (
		<div>
			<button
				onClick={() => gotoPage(0)}
				disabled={!canPreviousPage}
			>
				{'<<'}
			</button>{' '}
			<button
				onClick={() => previousPage()}
				disabled={!canPreviousPage}
			>
				{'<'}
			</button>{' '}
			<button
				onClick={() => nextPage()}
				disabled={!canNextPage}
			>
				{'>'}
			</button>{' '}
			<button
				onClick={() => gotoPage(pageCount - 1)}
				disabled={!canNextPage}
			>
				{'>>'}
			</button>{' '}
			<span>
				Сторінка{' '}
				<strong>
					{pageIndex + 1} з {pageCount}
				</strong>{' '}
			</span>
			<span>
				| Перейти на сторінку:{' '}
				<input
					type='number'
					value={pageIndex + 1}
					onChange={(e) => {
						const page = e.target.value ? Number(e.target.value) - 1 : 0;
						gotoPage(page);
					}}
					style={{ width: '50px' }}
				/>
			</span>{' '}
			<span>Кількість рядків на сторінці: </span>
			<select
				value={pageSize as number}
				onChange={(e) => {
					setPageSize(Number(e.target.value));
				}}
			>
				{[10, 20, 30, 40, 50].map((size) => (
					<option
						key={size}
						value={size}
					>
						{size}
					</option>
				))}
			</select>
		</div>
	);
};

export default Pagination;
