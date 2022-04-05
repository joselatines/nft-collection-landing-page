import { Header } from './overviewSections/Header';
import { NFTSOverview } from './overviewSections/NFTSOverview';
import { NFTSRoi } from './overviewSections/NFTSRoi';
import { OverviewDescription } from './overviewSections/OverviewDescription';

export const Overview = () => {
	return (
		<main>
			<Header />
			<OverviewDescription />
			<NFTSOverview />
			<NFTSRoi />
		</main>
	);
};
