import { Header } from './sections/Header';
import { NFTSOverview } from './sections/NFTSOverview';
import { OverviewDescription } from './sections/OverviewDescription';

export const OverviewPage = () => {
	return (
		<main>
			<Header />
			<OverviewDescription />
			<NFTSOverview />
		</main>
	);
};
