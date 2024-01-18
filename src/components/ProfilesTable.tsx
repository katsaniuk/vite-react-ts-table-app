import React from 'react';
import { Link } from 'react-router-dom';
import {
	Column,
	usePagination,
	useSortBy,
	useTable,
	useGlobalFilter
} from 'react-table';
import Pagination from './Pagination';
import GlobalFilter from './GlobalFilter';

interface Profile {
	accountId: number;
	profileId: number;
	campaignId: number;
	country: string;
	marketplace: string;
}

interface ProfilesTableProps {
	data: Profile[];
}

const ProfilesTable: React.FC<ProfilesTableProps> = ({ data }) => {
	const columns: Column<Profile>[] = React.useMemo(
		() => [
			{ Header: 'Profile ID', accessor: 'profileId' },
			{ Header: 'Country', accessor: 'country' },
			{ Header: 'Marketplace', accessor: 'marketplace' }
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
		<div  className='container mt-6 bg-light'>
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
										<Link to={`/campaigns/${row.original.campaignId}`}>
											{cell.render('Cell')}
										</Link>
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

export default ProfilesTable;
