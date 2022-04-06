import { Benefits } from './Benefits';
import { Header } from './overviewSections/Header';
import { NFTSOverview } from './overviewSections/NFTSOverview';
import { NFTSRoi } from './overviewSections/NFTSRoi';
import { OverviewDescription } from './overviewSections/OverviewDescription';
import { Roadmap } from './Roadmap';

export const Overview = () => {
	return (
		<main>
			<Header />
			<OverviewDescription />
			<NFTSOverview />
			<NFTSRoi />
			<Benefits />
			<Roadmap />
		</main>
	);
};
