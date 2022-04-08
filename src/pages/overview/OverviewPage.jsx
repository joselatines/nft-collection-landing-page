import { Benefits } from './sections/Benefits';
import { Header } from './sections/Header';
import { NFTSOverview } from './sections/NFTSOverview';
import { NFTSRoi } from './sections/NFTSRoi';
import { OverviewDescription } from './sections/OverviewDescription';
import { Roadmap } from './sections/Roadmap';
import { Team } from './sections/Team';

export const Overview = () => {
	return (
		<main>
			<Header />
			<OverviewDescription />
			<NFTSOverview />
			<NFTSRoi />
			<Benefits />
			<Roadmap />
			<Team />
		</main>
	);
};
