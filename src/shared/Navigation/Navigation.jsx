import { Container, LinksContainer, Logo } from './styles';

export const Navigation = () => {
	return (
		<Container>
			<LinksContainer>
				<li>
					<a href=''>Mint</a>
				</li>
				<li>
					<a href=''>Profile</a>
				</li>
				<Logo className='logo'>
					<img
						src='https://i.ibb.co/gZzM4BB/divitium-white.png'
						alt='divitium logo'
					/>
				</Logo>
				<li>
					<a href=''>Whitelist</a>
				</li>
				<li>
					<a href=''>Team</a>
				</li>
			</LinksContainer>
		</Container>
	);
};
