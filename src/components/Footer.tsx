import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const FooterStyles = styled.footer`
	padding: 28px 0;
	background: ${({ theme }) => theme.color.black};
	color: #fff;
`;

const Footer = () => (
	<FooterStyles>
		<Container size="md">
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
