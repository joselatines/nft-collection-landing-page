import styled from 'styled-components';
import { variables } from '../../../../shared/GlobalStyles';

export const Benefit = ({ title, lis }) => {
	return (
		<Container>
			<h1 className='subtitle'>{title}</h1>
			<ul>
				{lis.map(el => (
					<li key={el}>{el}</li>
				))}
			</ul>
		</Container>
	);
};

const Container = styled.div`
	.subtitle {
		font-size: 1.2rem;
		margin-bottom: 0.8rem;
	}
	ul {
		list-style: none;
		color: ${variables.colors.gray};
		li {
			line-height: 2;
			&::before {
				content: '•';
				color: ${variables.colors.gray};
				margin-right: 5px;
			}
		}
	}
`;
