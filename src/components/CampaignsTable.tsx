import React from 'react';
import {
	Column,
	useGlobalFilter,
	usePagination,
	useSortBy,
	useTable
} from 'react-table';
import Pagination from './Pagination';
import GlobalFilter from './GlobalFilter';

interface Campaingn {
	campaignId: number;
	clicks: number;
	cost: number;
	date: string;
}

interface CampaingTableProps {
	data: Campaingn[];
}

const CampaignsTable: React.FC<CampaingTableProps> = ({ data }) => {
	const columns: Column<Campaingn>[] = React.useMemo(
		() => [
			{ Header: 'Campaign ID', accessor: 'campaignId' },
			{ Header: 'Clicks', accessor: 'clicks' },
			{ Header: 'Cost', accessor: 'cost' },
			{ Header: 'Date', accessor: 'date' }
		],
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		state: { pageIndex, pageSize, globalFilter },
		page,
		pageCount,
		canPreviousPage,
		canNextPage,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		setGlobalFilter
	} = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

	return (
		<div className='container mt-6 bg-light'>
			<GlobalFilter
				filter={globalFilter}
				setFilter={setGlobalFilter}
			/>
			<table
				{...getTableProps()}
				className='table table-bordered table-striped'
			>
				<thead className='table-dark'>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(column.getSortByToggleProps())}
									style={{
										border: '1px solid #ddd',
										padding: '8px',
										textAlign: 'left',
										cursor: 'pointer'
									}}
								>
									{column.render('Header')}
									<span>{column.isSorted ? ' 🔽' : ' 🔼'}</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => (
									<td
										{...cell.getCellProps()}
										style={{
											border: '1px solid #ddd',
											padding: '8px',
											textAlign: 'left'
										}}
									>
										{cell.render('Cell')}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			<Pagination
				pageIndex={pageIndex}
				pageSize={pageSize}
				pageCount={pageCount}
				canPreviousPage={canPreviousPage}
				canNextPage={canNextPage}
				gotoPage={gotoPage}
				nextPage={nextPage}
				previousPage={previousPage}
				setPageSize={setPageSize}
			/>
		</div>
	);
};

export default CampaignsTable;
