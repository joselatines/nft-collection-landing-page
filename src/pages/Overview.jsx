import { Header } from './overviewSections/Header';
import { NFTSOverview } from './overviewSections/NFTSOverview';
import { OverviewDescription } from './overviewSections/OverviewDescription';

export const Overview = () => {
	return (
		<main>
			<Header />
			<OverviewDescription />
			<NFTSOverview />
		</main>
	);
};
