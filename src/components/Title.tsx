import styled from 'styled-components';

const Title = styled.h1`
	margin: 0;
	color: ${({ white, theme }) => (white ? theme.color.textInverted : theme.color.text)};
	font-family: ${({ theme }) => theme.font.display};
	font-size: ${({ size }) => {
		if(size === 'md') return '1.625rem';

		return '2rem';
	}};
	text-transform: uppercase;

	+* {
		margin-top: 20px;
	}

	@media (max-width: 599px) {
		font-size: 1.5rem;

		+* {
			margin-top: 15px;
		}
	}
`;

export default Title;
