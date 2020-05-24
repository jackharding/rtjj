import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const FooterStyles = styled.footer`
	padding: 28px 0;
	background: ${({ theme }) => theme.color.black};
	color: #fff;

	@media (max-width: 599px) {
		padding: 16px 0;
	}
`;

const Footer = () => (
	<FooterStyles>
		<Container size="lg">
			<p>
				&copy;
				{ new Date().getFullYear() }
				{' '}
				RTJJ
			</p>
		</Container>
	</FooterStyles>
);

export default Footer;
