import { useParams } from 'react-router-dom';
import ProfilesTable from '../components/ProfilesTable';

const ProfilePage: React.FC = () => {
	const { accountId } = useParams<{ accountId: string }>();

	if (!accountId) {
		return <div>Invalid Account ID</div>;
	}

	const profileData = [
		{
			accountId: 1,
			profileId: 1,
			country: 'Ukraine',
			campaignId: 1,
			marketplace: 'Rozetka'
		},
		{
			accountId: 1,
			profileId: 2,
			country: 'Ukraine',
			campaignId: 2,
			marketplace: 'Comfy'
		},
		{
			accountId: 2,
			profileId: 3,
			country: 'Ukraine',
			campaignId: 3,
			marketplace: 'Foxtrot'
		},
		{
			accountId: 2,
			profileId: 4,
			country: 'USA',
			campaignId: 4,
			marketplace: 'Amazon'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 5,
			country: 'USA',
			campaignId: 5,
			marketplace: 'eBay'
		},
		{
			accountId: 3,
			profileId: 6,
			country: 'Ukraine',
			campaignId: 6,
			marketplace: 'MoYo'
		},
		{
			accountId: 3,
			profileId: 7,
			country: 'USA',
			campaignId: 7,
			marketplace: 'HP Inc.'
		}
	];

	const filterProfileData = profileData.filter(
		(profile) => profile.accountId === +accountId
	);

	return (
		<div className='row'>
			<h2>Profile Page</h2>
			<ProfilesTable data={filterProfileData} />
		</div>
	);
};

export default ProfilePage;
