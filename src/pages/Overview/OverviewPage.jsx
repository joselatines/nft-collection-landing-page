import { Header } from './Sections/Header';
import { NFTSOverview } from './Sections/NFTSOverview';
import { OverviewDescription } from './Sections/OverviewDescription';

export const OverviewPage = () => {
	return (
		<main>
			<Header />
			<OverviewDescription />
			<NFTSOverview />
		</main>
	);
};
