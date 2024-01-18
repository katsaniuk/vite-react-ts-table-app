import AccountsTable from '../components/AccountsTable';

const AccountsPage: React.FC = () => {
	const accountData = [
		{
			accountId: 1,
			email: 'example1@example.com',
			authToken: 'token1',
			creationDate: '17-01-2022'
		},
		{
			accountId: 2,
			email: 'example2@example.com',
			authToken: 'token2',
			creationDate: '18-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		},
		{
			accountId: 3,
			email: 'example3@example.com',
			authToken: 'token3',
			creationDate: '19-01-2022'
		}
	];

	return (
		<div className='row'>
			<h2>Accounts Page</h2>
			<AccountsTable data={accountData} />
		</div>
	);
};

export default AccountsPage;
