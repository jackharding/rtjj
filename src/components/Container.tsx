import styled from 'styled-components';

interface ContainerProps {
    size: 'lg' | 'md' | 'sm' | 'xs';
}

export enum ContainerSizes {
	xs = '684px',
	sm = '864px',
	md = '1152px',
	lg = '1296px',
}

export const padding = '20px';

const Container = styled.div<ContainerProps>`
    width: 100%;
    max-width: ${({ size }) => {
		if(size) {
			return ContainerSizes[size];
		}

		return 'none';
	}};
	margin: 0 auto;
	padding: 0 ${padding};
`;

Container.defaultProps = {
	size: 'md',
};

export default Container;
