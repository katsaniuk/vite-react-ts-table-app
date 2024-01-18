import { Link, useParams } from 'react-router-dom';
import CampaignsTable from '../components/CampaignsTable';

const CampaignsPage: React.FC = () => {
	const { campaignId } = useParams<{ campaignId: string }>();

	if (!campaignId) {
		return <div>Invalid Campaign ID</div>;
	}

	const campaignData = [
		{ campaignId: 1, clicks: 32, cost: 23.45, date: '19-01-2022' },
		{ campaignId: 2, clicks: 54, cost: 55.99, date: '20-01-2022' },
		{ campaignId: 3, clicks: 37, cost: 60.91, date: '21-01-2022' },
		{ campaignId: 4, clicks: 22, cost: 30, date: '22-01-2022' },
		{ campaignId: 5, clicks: 9, cost: 66.1, date: '23-01-2022' },
		{ campaignId: 6, clicks: 78, cost: 10.24, date: '24-01-2022' },
		{ campaignId: 7, clicks: 100, cost: 27.3, date: '25-01-2022' }
	];

	const filterCampaignData = campaignData.filter(
		(campaign) => campaign.campaignId == +campaignId
	);

	return (
		<div className='row'>
			<h2>Campaigns Page</h2>
			<CampaignsTable data={filterCampaignData} />
			<Link
				to='/'
				className='ml-3'
			>
				<button className='btn btn-outline-primary mt-3 ml-auto'>
					Go Back to Accounts
				</button>
			</Link>
		</div>
	);
};

export default CampaignsPage;
