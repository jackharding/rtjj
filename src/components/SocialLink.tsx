import styled from 'styled-components';

const SocialLink = styled.a`
	padding: 13px;
	color: ${({ theme }) => theme.color.brand['500']};

	svg {
		width: auto;
		height: ${(props) => (props.small ? '20px' : '26px')};
	}

	&:hover {
		color: ${({ theme }) => theme.color.brand['400']};
	}
`;

export default SocialLink;
